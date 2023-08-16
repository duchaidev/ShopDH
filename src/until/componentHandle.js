import { Buffer } from "buffer";
import { toast } from "react-toastify";

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const convertBase64ToImage = (base64) => {
  let image = new Buffer(base64, "base64").toString("binary");
  return image;
};

// Format lại ngày sinh để hiển thị lên input
export const formatISODateToInputDate = (isoDate) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = (date.getUTCDate() + 1).toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
