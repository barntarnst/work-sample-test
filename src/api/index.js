const BASE_URL = 'http://sravan-sample.accomplice.se/wp/wp-json/wp/v2';
const POSTS_URL = `${BASE_URL}/posts`;

export { BASE_URL, POSTS_URL };

/* cSpell:disable */
// eslint-disable-next-line no-unused-vars
const sample = {
  id: 13,
  date: '2018-09-16T13:44:50',
  date_gmt: '2018-09-16T13:44:50',

  slug: 'post-3-lorem-ipsum-dolor-sit-hic-doloremque-ratione-nihil-id-nulla-molestiae-fugit',
  status: 'publish',
  type: 'post',
  title: {
    rendered:
      'Post-3 Lorem, ipsum dolor sit hic doloremque ratione nihil id nulla molestiae fugit.',
  },
  content: {
    rendered:
      '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis esse totam quas necessitatibus quam ea nostrum cumque officiis voluptatem, ducimus porro itaque alias ad commodi unde cum debitis similique autem! Facere natus ex necessitatibus hic perferendis vel quaerat labore deleniti tempore nostrum assumenda veniam id, est corporis cum maxime iure quia rem exercitationem similique quas repellat expedita quasi quidem! Sunt minus molestiae blanditiis veniam itaque! Magnam mollitia beatae accusamus illo iure voluptates consequuntur et, repellendus animi eius. Magni, hic ex?</p> ',
    protected: false,
  },

  author: 1,
};
