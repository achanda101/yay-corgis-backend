export default {
  name: "corgi",
  title: "Corgi",
  type: "document",
  fields: [
    {
      name: "corgiImage",
      title: "Corgi Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "suggestedNames",
      title: "Suggested Names",
      type: "array",
      of: [
        {
          type: "object",
          name: "suggestedNames",
          title: "Suggested Names",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "votes",
              title: "Votes",
              type: "number",
            },
          ],
          preview: {
            select: {
              title: "name",
              votes: "votes",
            },
            prepare(selection) {
              return {
                ...selection,
                subtitle: `${selection.votes} votes`,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "corgiImage.asset.creditLine",
      media: "corgiImage",
    },
  },
};
