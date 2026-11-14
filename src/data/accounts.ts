// number = ตัวที่แสดง, ตอนคัดลอกจะตัดขีด/ช่องว่างออกให้อัตโนมัติ
export type Account = {
  label: string;
  detail: string;
  number: string;
  icon?: string;
};

export const ACCOUNTS: Account[] = [
  { label: "เลขบัญชีธนาคาร", detail: "ธนาคารกสิกรไทย (K+) · ธวัลรัตน์ เชื้อแก้ว", number: "154-8-30992-8", icon: "/kbank-icon.png" },
  { label: "เลขวอเลท", detail: "TrueMoney Wallet · ธวัลรัตน์ เชื้อแก้ว", number: "092-694-1799", icon: "/truemoney-icon.png" },
];

export const ACCOUNT_NOTE = "มีสองบัญชีเท่านั้น · โอนบัญชีอื่นไม่รับผิดชอบทั้งสิ้น";

// รูป QR อยู่ที่ public/qr.png
export const QR_SRC: string | null = "/qr.png";
