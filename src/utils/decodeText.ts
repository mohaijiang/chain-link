export const decodeText = (hex: string) => {
  const hexString = hex.slice(2);
  const byteArray = Buffer.from(hexString, "hex");
  const decodedString = byteArray.toString("utf-8");
  return decodedString;
}