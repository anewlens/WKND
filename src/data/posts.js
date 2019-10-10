const posts = [
    {
        id: 1,
        day: 'FRI',
        author: 'Steven',
        text: 'New pizza place on broad looks good! Meet there at 8?',
        commentsNum: 3,
        comments: [
            {
                id: 4,
                post_id: 1,
                text: "What's it called?",
                author: "Katy"
            },
            {
                id: 5,
                post_id: 1,
                text: "...and do they supply scissors",
                author: "Robbie"
            },
            {
                id: 6,
                post_id: 1,
                text: "Pizza Hutt",
                author: "Steven"
            }
        ]
    },
    {
        id: 2,
        day: 'SAT',
        author: 'Katy',
        text: 'Anyone wanna play siege?',
        commentsNum: 1,
        comments: [
            {
                id: 7,
                post_id: 2,
                text: "Gimme 20",
                author: "Lionel"
            }
        ]
    },
    {
        id: 3,
        day: 'SAT',
        author: 'Sherwyn',
        text: 'Not gonna be free today, sorry guys.',
        commentsNum: 0
    }
]

export default posts