import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
const ContactLists = ({ contacts, updateContact, updateCallback }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Student Lists" }),
    /* @__PURE__ */ jsxs("table", { children: [
      /* @__PURE__ */ jsxs("thead", { children: [
        /* @__PURE__ */ jsx("img", { src: "/images/logo.png", class: "faslogo" }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { id: "cbox", children: "Username" }),
          /* @__PURE__ */ jsx("th", { id: "cbox", children: "Email" }),
          /* @__PURE__ */ jsx("th", { id: "cbox", children: "Man" }),
          /* @__PURE__ */ jsx("th", { id: "cbox", children: "Ngot" }),
          /* @__PURE__ */ jsx("th", { id: "cbox", children: "Tùy chọn" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("tbody", { children: contacts.map((contact) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { id: "cbox", children: contact.username }),
        /* @__PURE__ */ jsx("td", { id: "cbox", children: contact.email }),
        /* @__PURE__ */ jsx("td", { id: "cbox", children: contact.man }),
        /* @__PURE__ */ jsx("td", { id: "cbox", children: contact.ngot }),
        /* @__PURE__ */ jsxs("td", { children: [
          /* @__PURE__ */ jsx("button", { onClick: () => updateContact(contact), children: "Cập nhật" }),
          /* @__PURE__ */ jsx("button", { children: "Xóa tài khoản" })
        ] })
      ] }, contact.id)) })
    ] })
  ] });
};
const SlideBar = ({ contacts }) => {
  const navigate = useNavigate();
  useState(false);
  function e() {
    navigate("/form");
  }
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { class: "containerbox", children: [
    /* @__PURE__ */ jsx("img", { src: "/images/logo.png", class: "faslogo", id: "ex-mar" }),
    /* @__PURE__ */ jsx("h2", { class: "logotitle", children: "FAS" }),
    /* @__PURE__ */ jsx("span", { class: "divider", id: "ex-mar" }),
    /* @__PURE__ */ jsxs("td", { id: "ex-mar", class: "formbuttons", children: [
      /* @__PURE__ */ jsx("button", { class: "buttons", onClick: e, children: "Đăng nhập" }),
      /* @__PURE__ */ jsx("button", { class: "buttons", onClick: e, children: "Đăng ký" })
    ] })
  ] }) });
};
const ContactForm = ({ existingContact = {}, updateCallback }) => {
  const [username, setUsername] = useState(existingContact.username || "");
  const [email, setEmail] = useState(existingContact.email || "");
  const [man, setMan] = useState(existingContact.man || "");
  const [ngot, setngot] = useState(existingContact.ngot || "");
  const [password, setPassword] = useState(existingContact.password || "");
  const [cay, setCay] = useState(existingContact.cay || "");
  const navigate = useNavigate();
  const updating = Object.entries(existingContact).length !== 0;
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Username, email, and password are required.");
      return;
    }
    const manValue = parseInt(man);
    const ngotValue = parseInt(ngot);
    const cayValue = parseInt(cay);
    if (isNaN(manValue) || manValue < 0 || manValue > 3 || isNaN(ngotValue) || ngotValue < 0 || ngotValue > 3 || isNaN(cayValue) || cayValue < 0 || cayValue > 3) {
      alert("Values for man, ngot, and cay must be integers between 1 and 3.");
      return;
    }
    const data = {
      username,
      email,
      man: manValue,
      ngot: ngotValue,
      cay: cayValue,
      password
    };
    console.log("Sending data:", JSON.stringify(data));
    const url = "https://app-cjhj.onrender.com/" + (updating ? `update_contact/${existingContact.id}` : "create_contact");
    const options = {
      method: updating ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Something went wrong!");
      } else {
        updateCallback();
        navigate("/drop");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "username", children: "Username:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "username",
          value: username,
          onChange: (e) => setUsername(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "password", children: "Password:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          id: "password",
          value: password,
          onChange: (e) => setPassword(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "man", children: "Độ mặn từ 1 tới 3:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          id: "man",
          value: man,
          onChange: (e) => setMan(e.target.value),
          min: "0",
          max: "3"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "ngot", children: "Độ ngot từ 1 tới 3:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          id: "ngot",
          value: ngot,
          onChange: (e) => setngot(e.target.value),
          min: "0",
          max: "3"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "cay", children: "Độ cay từ 1 tới 3:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          id: "cay",
          value: cay,
          onChange: (e) => setCay(e.target.value),
          min: "0",
          max: "3"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", children: updating ? "Update" : "Create" })
  ] });
};
const Dropbox = () => {
  return /* @__PURE__ */ jsx("div", { className: "body", children: /* @__PURE__ */ jsx("div", { className: "content", children: /* @__PURE__ */ jsxs("div", { className: "box1", children: [
    /* @__PURE__ */ jsx("p", { className: "welcome", children: "Let's get started" }),
    /* @__PURE__ */ jsx("ul", { className: "drop1", children: /* @__PURE__ */ jsxs("li", { className: "flavour", children: [
      "Choose your flavour ▾",
      /* @__PURE__ */ jsxs("ul", { className: "drop2", children: [
        /* @__PURE__ */ jsx("li", { className: "choice", children: /* @__PURE__ */ jsx("a", { className: "c", children: "Flavour 1" }) }),
        /* @__PURE__ */ jsx("li", { className: "choice", children: /* @__PURE__ */ jsx("a", { className: "c", children: "Flavour 2" }) }),
        /* @__PURE__ */ jsx("li", { className: "choice", children: /* @__PURE__ */ jsx("a", { className: "c", children: "Flavour 3" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("ul", { className: "drop1", children: /* @__PURE__ */ jsxs("li", { className: "flavour", children: [
      "Choose your flavour ▾",
      /* @__PURE__ */ jsxs("ul", { className: "drop2", children: [
        /* @__PURE__ */ jsx("li", { className: "choice", children: /* @__PURE__ */ jsx("a", { className: "c", children: "Flavour 1" }) }),
        /* @__PURE__ */ jsx("li", { className: "choice", children: /* @__PURE__ */ jsx("a", { className: "c", children: "Flavour 2" }) }),
        /* @__PURE__ */ jsx("li", { className: "choice", children: /* @__PURE__ */ jsx("a", { className: "c", children: "Flavour 3" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("ul", { className: "drop1", children: /* @__PURE__ */ jsxs("li", { className: "flavour", children: [
      "Choose your flavour ▾",
      /* @__PURE__ */ jsxs("ul", { className: "drop2", children: [
        /* @__PURE__ */ jsx("li", { className: "choice", children: /* @__PURE__ */ jsx("a", { className: "c", children: "Flavour 1" }) }),
        /* @__PURE__ */ jsx("li", { className: "choice", children: /* @__PURE__ */ jsx("a", { className: "c", children: "Flavour 2" }) }),
        /* @__PURE__ */ jsx("li", { className: "choice", children: /* @__PURE__ */ jsx("a", { className: "c", children: "Flavour 3" }) })
      ] })
    ] }) })
  ] }) }) });
};
const FoodForm = ({ updateCallback }) => {
  const [username, setUsername] = useState("");
  const [man, setMan] = useState(0);
  const [ngot, setNgot] = useState(0);
  const [cay, setCay] = useState(0);
  const [check, setcheck] = useState(0);
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      man,
      ngot,
      cay,
      check
    };
    console.log(JSON.stringify(data));
    const url = "https://app-cjhj.onrender.com/create_food";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(url, options);
    if (response.status !== 201 && response.status !== 200) {
      const data2 = await response.json();
      alert(data2.message);
    } else {
      updateCallback();
    }
  };
  function stoi(settarget, value) {
    let numrifyV = 0;
    if (value !== "") {
      numrifyV = parseInt(value, 10);
    }
    if (numrifyV >= 3) {
      numrifyV = 3;
    } else if (numrifyV < 0 || isNaN(numrifyV)) {
      numrifyV = 0;
    }
    switch (settarget) {
      case "man":
        setMan(numrifyV);
        break;
      case "ngot":
        setNgot(numrifyV);
        break;
      case "cay":
        setCay(numrifyV);
        break;
    }
  }
  return /* @__PURE__ */ jsx("div", { class: "loginhud", children: /* @__PURE__ */ jsxs("form", { onSubmit, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "username", class: "boxtitle", children: "Username: " }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "input",
        {
          class: "textbox",
          type: "text",
          id: "username",
          value: username,
          onChange: (e) => setUsername(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "man", class: "boxtitle", children: "Saltiness: " }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "input",
        {
          class: "textbox",
          type: "number",
          id: "man",
          value: man,
          onChange: (e) => stoi(e.target.id, e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "ngot", class: "boxtitle", children: "Sweetness: " }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "input",
        {
          class: "textbox",
          type: "number",
          id: "ngot",
          value: ngot,
          onChange: (e) => stoi(e.target.id, e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "cay", class: "boxtitle", children: "Spiciness: " }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "input",
        {
          class: "textbox",
          type: "number",
          id: "cay",
          value: cay,
          onChange: (e) => stoi(e.target.id, e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("button", { type: "submit", class: "buttons", id: "submitbut", children: "Add Food" })
  ] }) });
};
const Home = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Chào mừng đến với trang chính!" }),
    /* @__PURE__ */ jsx("p", { children: "Nội dung trang chính của bạn sẽ hiển thị ở đây." })
  ] });
};
function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    fetchContacts();
  }, []);
  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    console.log(data.contacts);
  };
  const onUpdate = () => {
    CloseModal();
    fetchContacts();
  };
  const CloseModal = () => {
    setIsModalOpen(false);
    setCurrentContact({});
  };
  const openEditModal = (contact) => {
    if (isModalOpen) return;
    setCurrentContact(contact);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxs(BrowserRouter, { children: [
    /* @__PURE__ */ jsx(SlideBar, { contacts }),
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/drop", element: /* @__PURE__ */ jsx(Dropbox, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/food", element: /* @__PURE__ */ jsx(FoodForm, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/contacts", element: /* @__PURE__ */ jsx(ContactLists, { contacts, updateContact: openEditModal, updateCallback: onUpdate }) }),
      /* @__PURE__ */ jsx(Route, { path: "/user", element: /* @__PURE__ */ jsx(SlideBar, { contacts }) }),
      /* @__PURE__ */ jsx(Route, { path: "/form", element: /* @__PURE__ */ jsx(ContactForm, { existingContact: currentContact, updateCallback: onUpdate }) })
    ] })
  ] });
}
function render() {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
