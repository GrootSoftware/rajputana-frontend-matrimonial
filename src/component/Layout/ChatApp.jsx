import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSendSharp } from "react-icons/io5";
import io from "socket.io-client";
import axios from "axios";
// Styles and Components
import style from "../Profile/ProfileComp/Profile.module.css";
import Profilenavbar from "../Profile/ProfileComp/Profilenavbar";
import Footer from "./Footer";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoChevronBackOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { GiCancel } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
import { useAuth } from "./AuthContext";

import "./Chat.css";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
const socket = io(BASE_URL, { autoConnect: false });

const ChatApp = () => {
  const [error, setError] = useState(null);
  const { updateData, fetchUserData } = useAuth();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  const [MatrID, setMatrID] = useState("");
  const [userId, setUserId] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [Status, setStatus] = useState("");
  const [RequestingId, setRequestingId] = useState("");
  const [RequestingMatrId, setRequestingMatrId] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    socket.connect();
    socket.on("connect", () => console.log("Connected to Socket.io server"));

    socket.on("newMessage", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off("newMessage");
      socket.disconnect();
    };
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${formattedDate} | ${hours}:${minutes} ${ampm}`;
  };

  const getUserId = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No authentication token found");

      const response = await axios.get(`${BASE_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserId(response.data?.user?._id || "");
    } catch (err) {
      setError("Unable to load user ID");
    }
  };

  const loadChats = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No authentication token found");

      const response = await axios.get(`${BASE_URL}/message/chat`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setChats(response.data || []);

      if (response.data.length > 0) {
        const chat = response.data[0];
        await loadMessages(chat?.lastMessage?.chatId);

        const firstMatrID = chat?.participants
          .filter((p) => p._id !== userId)
          .map((p) => p.martrId);
        setMatrID(firstMatrID);
      }
    } catch (err) {
      setError("Unable to load chats");
    }
  };

  const loadRequest = async () => {
    try {
      const route = `chat/status`;
      const response = await fetchUserData(route);
      console.log(response);
      if (response.length > 0) {
        const requestingChats = response.filter(
          (chat) => chat.status === "other"
        );
        if (requestingChats.length > 0) {
          setRequestingId(requestingChats[0]._id);
          setRequestingMatrId(
            requestingChats[0].participants.find((p) => p._id !== userId)
              ?.martrId || ""
          );
          setStatus("other");
        } else {
          setStatus("");
          setRequestingId("");
        }
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  const loadMessages = async (chatId) => {
    if (!chatId) return;
    setActiveChat(chatId);

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        `${BASE_URL}/message`,
        { chatId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessages(response.data || []);
    } catch (err) {
      setError("Unable to load messages");
    }
  };

  const deletechat = async (chatId, deleteForAll) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.post(
        `${BASE_URL}/delete/message`,
        { chatId, deleteForAll },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessages([]);
    } catch (err) {
      setError("Unable to delete chat");
    }
  };

  const sendMessage = async () => {
    if (!activeChat || !message.trim()) return;

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        `${BASE_URL}/message/send`,
        { chatId: activeChat, message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      socket.emit("sendMessage", { chatId: activeChat, message });
      setMessage("");
      toast.success(response.data.message || "Message sent successfully", {
        position: "top-center",
        autoClose: 1500,
      });
      await loadMessages(activeChat);
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Failed to send message";
      setError(errorMessage);
      toast.error(errorMessage, { position: "top-center", autoClose: 1500 });
    }
  };

  const handleResponse = async (action, chatId) => {
    try {
      let route = `chat/status/update`;
      let data = { action, chatId };
      await updateData(route, data);
      await loadChats();
      await loadRequest();
    } catch (error) {
      console.error(`Error performing action: ${action}`, error);
    }
  };

  useEffect(() => {
    getUserId();
    if (userId) {
      loadChats();
      loadRequest();
    }
  }, [userId, Status]);

  return (
    <>
      <div className={`${style.minhScreen}`}>
        <Profilenavbar />
        <div className={`${style.Container}`} style={{ paddingBottom: "2rem" }}>
          <div className={style.routerpathtext}>
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>{" "}
            <AiOutlineRight /> {" Success Stories"}
          </div>
          <section className="container-fluid bg-white p-0">
            <div className="row p-0 m-0">
              {(!isMobile || !activeChat) && (
                <div className="col-sm-5 col-md-4 border-end p-0">
                  <div
                    className="p-3"
                    style={{
                      borderBottom: "1px solid gray",
                    }}
                  >
                    <input
                      type="text"
                      className="form-control rounded-0"
                      placeholder="Search"
                      style={{
                        boxSizing: "border-box",
                      }}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="">
                    {chats
                      ?.filter((chat) => {
                        return (
                          chat?.participants?.some(
                            (participant) =>
                              participant?._id !== userId &&
                              String(participant?.martrId || "")
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase())
                          ) ||
                          chat?.lastMessage?.message
                            ?.toLowerCase()
                            .includes(searchQuery.toLowerCase())
                        );
                      })
                      .sort((a, b) => {
                        return a.updatedAt > b.updatedAt ? -1 : 1;
                      })
                      .map((chat, index) => (
                        <div
                          key={chat._id}
                          className={`p-3`}
                          style={{
                            backgroundColor:
                              chat?._id === activeChat
                                ? "rgba(248, 235, 210, 1)"
                                : "white",
                            borderBottom: "1px solid gray",
                          }}
                          onClick={() => {
                            loadMessages(chat?._id);
                            setMatrID(
                              chat?.participants
                                ?.filter(
                                  (participant) => participant?._id != userId
                                )
                                ?.map((participant) => participant?.martrId)
                            );
                          }}
                        >
                          <p className="d-flex flex-wrap justify-content-between m-0">
                            <span className="matrifont">
                              {chat?.participants
                                .filter(
                                  (participant) => participant._id != userId
                                )
                                .map((participant) => participant.martrId)
                                .join("")}
                            </span>
                            <span className="timetext">
                              {formatDate(chat.updatedAt)}
                            </span>
                          </p>

                          {chat?.lastMessage?.seenBy?.length === 1 &&
                          !chat?.lastMessage?.seenBy?.includes(userId) ? (
                            <p className="smstextbold mt-1 mb-1">
                              {chat.lastMessage?.message}
                            </p>
                          ) : chat?.lastMessage?.seenBy?.length >=
                            chat?.participants?.length - 1 ? (
                            <p className="chatbodysms mt-1 mb-1">
                              {chat.lastMessage?.message}
                            </p>
                          ) : null}
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {(!isMobile || activeChat) && (
                <>
                  <div
                    className="col-sm-7 col-md-8 d-flex flex-column p-0"
                    style={{ height: "90vh" }}
                  >
                    <div
                      className="d-flex justify-content-between p-3 text-white"
                      style={{ backgroundColor: "rgba(243, 243, 243, 1)" }}
                    >
                      <>
                        <span className="matrifont">
                          {isMobile && (
                            <IoChevronBackOutline
                              size="22"
                              style={{
                                color: "black",
                                marginBottom: "0.3rem",
                                marginRight: "0.3rem",
                              }}
                              onClick={() => {
                                setActiveChat(null);
                              }}
                            />
                          )}
                          {MatrID}
                        </span>

                        <span>
                          <RiDeleteBin5Line
                            onClick={() => {
                              setShowDeleteModal(true);
                            }}
                            style={{ color: "black" }}
                            size="22"
                          />
                        </span>
                        {showDeleteModal && (
                          <div
                            className="modal fade show d-block"
                            tabIndex="-1"
                            role="dialog"
                            style={{ background: "rgba(0, 0, 0, 0.5)" }}
                          >
                            <div
                              className="modal-dialog modal-sm modal-dialog-centered"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title text-dark">
                                    Confirm Deletion
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowDeleteModal(false)}
                                  ></button>
                                </div>
                                <div className="modal-body text-center text--dark">
                                  <p>
                                    Are you sure you want to delete this chat?
                                  </p>
                                </div>
                                <div className="modal-footer d-flex justify-content-between">
                                  <button
                                    className="btn btn-danger w-100 me-2"
                                    onClick={() => {
                                      deletechat(activeChat, true);
                                      setShowDeleteModal(false);
                                    }}
                                  >
                                    Delete for Everyone
                                  </button>
                                  <button
                                    className="btn btn-warning w-100"
                                    onClick={() => {
                                      deletechat(activeChat, false);
                                      setShowDeleteModal(false);
                                    }}
                                  >
                                    Delete for Me
                                  </button>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    className="btn btn-secondary w-100"
                                    onClick={() => setShowDeleteModal(false)}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    </div>

                    {Status == "other" && (
                      <div
                        className="d-flex flex-column flex-sm-row align-items-center justify-content-between p-2 p-sm-3 text-white smstext"
                        style={{
                          backgroundColor: "white",
                          borderBottom: "1px solid gray",
                          fontSize: "clamp(10px, 12px, 14px)",
                        }}
                      >
                        <p className="m-0 text-dark text-center text-sm-start flex-grow-1">
                          Matri ID: {RequestingMatrId} is interested in chatting
                          with you. Would you like to start a conversation?
                        </p>

                        <div className="d-flex mt-2 gap-3 mt-sm-0 justify-content-between">
                          <span
                            className="text-success d-flex align-items-center gap-2 p-3 cursor-pointer chatrequestBtn"
                            onClick={() =>
                              handleResponse("accepted", RequestingId)
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <FaCheck /> Accept
                          </span>

                          <span
                            className="text-danger d-flex align-items-center gap-1 p-3 cursor-pointer chatrequestBtn"
                            onClick={() =>
                              handleResponse("rejected", RequestingId)
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <GiCancel /> Reject
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex-grow-1 p-3 d-flex flex-column overflow-y-scroll">
                      <>
                        {messages?.map((msg, index) => (
                          <div
                            key={msg._id}
                            className={`d-flex flex-column ${
                              msg.sender?._id === userId
                                ? "align-items-start"
                                : "align-items-end"
                            }`}
                          >
                            <div className="messageStyle">
                              <div
                                className="p-2"
                                style={{
                                  backgroundColor:
                                    msg.sender?._id === userId
                                      ? " rgba(248, 235, 210, 1)"
                                      : "white",
                                  border:
                                    msg.sender?._id === userId
                                      ? "none"
                                      : "1px solid gray",
                                }}
                              >
                                <p className="p-0 m-0 smstext">{msg.message}</p>
                              </div>
                              <div className="rounded p-1">
                                <p
                                  className="timetext"
                                  style={{
                                    textAlign:
                                      msg.sender?._id === userId
                                        ? "text-end"
                                        : "text-start",
                                  }}
                                >
                                  {formatDate(msg.createdAt)}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    </div>
                    <div className="p-3 d-flex border-top bg-white">
                      <input
                        type="text"
                        className="rounded-0 p-2 flex-grow-1"
                        style={{ outline: "none", border: "1px solid gray" }}
                        placeholder="Type a message..."
                        value={message}
                        maxLength={100}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <button
                        className="p-2"
                        onClick={sendMessage}
                        style={{
                          backgroundColor: "#8b0000",
                          // border: "1px solid gray",
                        }}
                      >
                        <IoSendSharp style={{ color: "white" }} size="20" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatApp;
