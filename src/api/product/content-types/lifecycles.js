module.exports = {
  async afterUpdate(event) {
    const { data } = event.params;

    await fetch("https://next13masters-ten.vercel.app/api/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"productId": "${data.id}"}',
    });

    await fetch("https://next13masters-ten.vercel.app/api/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"productId": "${data.id}"}',
    });
  },
};
