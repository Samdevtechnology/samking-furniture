import { AES, enc } from "crypto-js";
import crypto from "crypto";

const AES_KEY = process.env.AES_KEY || "LOVELY SECURED";

const generateSalt = (length: number) => {
  return crypto.randomBytes(length).toString("hex");
};

export const encrypt = (data: string) => {
  const salt = generateSalt(16);
  const encryptedData = AES.encrypt(data, AES_KEY + salt).toString();
  return encryptedData + salt;
};

export const decrypt = (encryptedDataWithSalt: string) => {
  const salt = encryptedDataWithSalt.slice(-32);
  const encryptedData = encryptedDataWithSalt.slice(0, -32);

  const decryptedData = AES.decrypt(encryptedData, AES_KEY + salt).toString(
    enc.Utf8
  );
  return decryptedData;
};
