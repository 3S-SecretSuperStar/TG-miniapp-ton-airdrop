const main = require('../main.js');

module.exports = {
    greeting: `<b>Привет, {{name}}!</b>\n\nДля начала, выбери свой язык 👇`,
    language: `Выбери свой язык 👇`,
    subscribe: `Чтобы участвовать в AIRDROP, подпишитесь на ${main.name_crypto}: <b>@${main.channel_ru}</b>`,
    unsubscribed: '🚫 Вы не подписались на канал!',
    thx_sub: 'Спасибо за подписку, {{name}} ❤️',
    menu: `<b>{{name}}, твой баланс: {{balance}} ${main.name_jetton}</b>\n\nПригласи друга и получи ${main.price_for_fren} ${main.name_jetton}! 😱\n<b>Это самые выгодные условия для массового AIRDROP!</b>\n\nПросто и легко! Каждый участник гарантированно получит свой <b>DROP</b> в <b>${main.name_jetton}</b> 💎\nНажми на кнопку <b>'📃 Условия'</b>, чтобы узнать все подробности!\n\n<b>➡️ Ссылка для приглашения друзей:</b> <code>{{link}}</code>`,
    invite_a_fren: `Пригласить друга 👥`,
    claim_time: `⏰ Возвращайся через <b>{{time}} мин.</b> для получения <b>${main.name_jetton}</b>`,
    claim_reward: `💰 {{name}}, ты получил <b>${main.price_for_click} ${main.name_jetton}</b>`,
    terms: `<b>🔥 Каждый участник гарантированно получит токены $YOD на свой кошелёк!</b>\n\nЧтобы принять участие, достаточно выполнить всего два простых шага:\n\n<b>1.</b> Подписаться на наш канал: <b>@${main.channel_ru}</b>\n<b>2.</b> Пригласить всех своих друзей\n\n<b>И это не всё!</b> 😱 За каждого друга, приглащенного тобой, ты получишь <b>${main.price_for_fren} ${main.name_jetton}</b> - такая возможность не встречается каждый день!\n\n<b>Начни приглашать друзей уже сейчас: <code>{{link}}</code></b>\n\nНе упусти свой шанс! Приглашай друзей и стань частью чего-то интересного! 🚀`,
    wallet: `Рекомендуем использовать <b>Tonkeeper</b>/Tonhub/MyTonWallet\n\n<b>👛 Твой текущий кошелёк:</b> <code>{{wallet}}</code>\n\n<a href="https://app.tonkeeper.com"><b>(нажми, чтобы открыть Tonkeeper)</b></a>\n\nВведи адрес своего кошелька сети TON:`,
    invalid_message: `<b>❌ Неизвестная команда!</b>\n\nИспользуйте <b>/start</b> и кнопки на клавиатуре для взаимодействия с ботом.`,
    new_referal: `<b>ℹ️ {{name}} присоединился к боту по вашей ссылке.\n\n<b>➕ ${main.price_for_fren} ${main.name_jetton}</b></b>\n\nВсего рефералов: <b>{{referals}}</b>`,
    kb_menu: [
        [`💎 Получить ${main.name_jetton}`],
        ['📃 Условия', '👛 Кошелёк'],
        ['✍️ Задания', '🥇 Рейтинг']
    ],
};