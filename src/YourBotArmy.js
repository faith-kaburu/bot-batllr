import React from "react";

const YourBotArmy = ({ enlistedBots, onReleaseBot, onDischargeBot }) => {
  const handleReleaseClick = (bot) => {
    onReleaseBot(bot.id);
  };

  const handleDischargeClick = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          onDischargeBot(bot.id);
        }
      });
  };

  return (
    <div className="flex flex-wrap flex-row">
      {enlistedBots.map((bot) => (
        <div
          onClick={() => handleReleaseClick(bot)}
          className="mt-8 bg-white rounded w-80 m-2 border-2 flex-shrink-0"
          key={bot.id}
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
            <button
              className="mt-4 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDischargeClick(bot)}
            >
              x
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
