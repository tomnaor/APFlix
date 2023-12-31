interface ChatMessageProps {
  message: string | JSX.Element | JSX.Element[];
  title?: string;
  createdAt?: string;
  owner: "user" | "bot";
  img?: JSX.Element;
}

export const ChatMessage = ({
  message,
  title,
  owner,
  img,
}: ChatMessageProps) => {
  return (
    <div className="flex gap-2 items-start">
      <span
        className={`text-2xl p-1 ${
          owner === "user" ? "bg-blue-200" : "bg-orange-200"
        } rounded-sm w-8 h-8 flex items-center`}
      >
        {owner === "user" ? `👨` : `🤖`}
      </span>
      <div className="flex flex-col gap-2 items-start">
        {title && (
          <h2 className="font-semibold leading-none tracking-tight">{title}</h2>
        )}
        {img ? img : null}
        <div className="flex flex-col rounded-md bg-white p-4 max-w-lg shadow">
          {message}
        </div>
      </div>
    </div>
  );
};
