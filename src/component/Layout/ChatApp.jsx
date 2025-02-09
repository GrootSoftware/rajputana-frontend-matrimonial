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

import "./Chat.css";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
const socket = io(BASE_URL, { autoConnect: false });

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  const [MatrID, setMatrID] = useState("");
  const [userId, setuserId] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const getuserId = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(`${BASE_URL}/user`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("loading");
      console.log(response?.data?.user._id);
      setuserId(response?.data?.user?._id);
    } catch (err) {
      setError("Unable to load messages");
    }
  };

  const loadChats = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(`${BASE_URL}/message/chat`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(response.data);
      setChats(response.data || []);
      if (response.data.length > 0) {
        const chat = response.data[0];
        await loadMessages(chat?.lastMessage?.chatId);
        var user = await getuserId();

        const firstMatrID = chat?.participants
          ?.filter((participant) => participant._id !== userId)
          ?.map((participant) => participant.martrId);
        console.log(firstMatrID);
        setMatrID(firstMatrID);
      }
    } catch (err) {
      setError("Unable to load messages");
    }
  };

  const loadMessages = async (chatId) => {
    setActiveChat(chatId);
    console.log(chatId);
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        `${BASE_URL}/message`,
        { chatId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response?.data);
      setMessage("");
      setMessages(response?.data || []);
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
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessages([]);
    } catch (err) {
      setError("Unable to load messages");
    }
  };

  const sendMessage = async () => {
    if (!activeChat) return;
    console.log(activeChat);
    const data = { chatId: activeChat, message };
    try {
      const token = localStorage.getItem("authToken");
      await axios.post(
        `${BASE_URL}/message/send`,
        { data },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      socket.emit("sendMessage", data);
      setMessage("");
      loadChats();
      await loadMessages(activeChat);
    } catch (error) {
      setError("Failed to send message");
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    window.addEventListener("resize", handleResize);
    getuserId();
    loadChats();
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
          <section className="container-fluid bg-white">
            <div className="row p-0">
              {(!isMobile || !activeChat) && (
                <div className="col-sm-5 col-md-4 p-3 border-end">
                  <input
                    type="text"
                    className="form-control rounded-0 p-2"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="mt-3">
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
                          className="pt-3 pb-2 border-bottom"
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
                            <p className="smstext mt-1 mb-1">
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
                          className="modal-overlay"
                          style={{ width: "250px", position: "relative" }}
                        >
                          <div className="modal-content">
                            <button
                              onClick={() => {
                                deletechat(activeChat, true);
                                setShowDeleteModal(false);
                              }}
                            >
                              Delete for Everyone
                            </button>
                            <button
                              onClick={() => {
                                deletechat(activeChat, false);
                                setShowDeleteModal(false);
                              }}
                            >
                              Delete for Me
                            </button>
                            <button onClick={() => setShowDeleteModal(false)}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex-grow-1 p-3 d-flex flex-column overflow-y-scroll">
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
                                    ? "#d1e7dd"
                                    : "rgba(248, 235, 210, 1)",
                                borderRadius: "10px",
                              }}
                            >
                              <p className="p-0 m-0 smstext">{msg.message}</p>
                            </div>
                            <div className="rounded p-1">
                              <p className="timetext text-end">
                                {formatDate(msg.createdAt)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 d-flex border-top bg-white">
                      <input
                        type="text"
                        className="rounded-0 p-2 flex-grow-1"
                        style={{ outline: "none", border: "none" }}
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <button
                        className="p-2"
                        onClick={sendMessage}
                        style={{
                          backgroundColor: "",
                          border: "none",
                        }}
                      >
                        <IoSendSharp />
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
