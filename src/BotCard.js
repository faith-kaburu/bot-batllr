import React from "react";

const BotCard = ({ bot, onEnlistBot }) => {
  const handleClick = () => {
    onEnlistBot(bot);
  };

  return (
    <div
      className="mt-8 bg-white rounded w-60 m-2 border-2 flex flex-col overflow-hidden shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105"
      onClick={handleClick}
    >
      <img
        className="bg-gray-300 w-full h-32 sm:h-48 object-cover rounded-t"
        src={bot.avatar_url}
        alt={bot.name}
      />
      <div className="p-4">
        <h1 className="font-bold text-2xl">{bot.name}</h1>
        <p className="font-bold">{bot.bot_class}</p>
        <p className="text-gray-500 break-words">{bot.catchphrase}</p>
        <div className="mt-4 text-gray-500 border-t border-gray-400 pt-2">
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
