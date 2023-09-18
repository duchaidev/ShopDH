import { Buffer } from "buffer";
import { io } from "socket.io-client";

export const socket = io(`${process.env.REACT_APP_BACKEND_URL_SOCKET}`, {
  transports: ["websocket", "polling", "flashsocket"],
});

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const convertBase64ToImage = (base64) => {
  let image = new Buffer(base64 || "", "base64").toString("binary");
  return image;
};

// Format lại ngày sinh để hiển thị lên input
export const formatISODateToInputDate = (isoDate, dmy = false) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = (date.getUTCDate() + 1).toString().padStart(2, "0");
  if (!dmy) {
    return `${year}-${month}-${day}`;
  } else if (dmy) {
    return `${day}/${month}/${year}`;
  }
};

export function truncateText(text = "", maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
}

export function formatDateAndDay(inputDate) {
  const date = new Date(inputDate);
  const currentDate = new Date();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const inputYear = date.getFullYear();
  const inputMonth = date.getMonth() + 1; // Months are 0-indexed
  const inputDay = date.getDate();
  const inputHour = date.getHours();
  const inputMinute = date.getMinutes();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  if (
    inputYear === currentYear &&
    inputMonth === currentMonth &&
    inputDay === currentDay
  ) {
    return `${inputHour}:${inputMinute}`;
  } else if (currentDate - date < 7 * 24 * 60 * 60 * 1000) {
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  } else {
    return `${inputDay}/${inputMonth}`;
  }
}

export function formatOfflineDuration(offlineAt) {
  const offlineTime = new Date(offlineAt);
  const currentTime = new Date();
  const timeDiff = Math.floor((currentTime - offlineTime) / 1000); // Time difference in seconds

  if (timeDiff < 60) {
    // Less than 1 minute
    return `${timeDiff}s`;
  } else if (timeDiff < 60 * 60) {
    // Less than 1 hour
    return `${Math.floor(timeDiff / 60)}min`;
  } else if (timeDiff < 24 * 60 * 60) {
    // Less than 1 day
    return `${Math.floor(timeDiff / (60 * 60))}hr`;
  } else {
    // More than 1 day
    const days = Math.floor(timeDiff / (24 * 60 * 60));
    return `${days}d`;
  }
}
