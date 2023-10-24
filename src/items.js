// Item list to display in gallery
// Construct this list from database entries (ex. MongoDB)

// Format
// item
//  |- id
//  |- title
//  |- description
//  |- image name
//  |- img alt text


const itemsList = [
    {
        id:     0,
        title:  "Alpha",
        desc:   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:    "Small-house.jpg",
        alt:    "alt",
        rating: 5
    },
    {
        id:     1,
        title:  "Beta- not the fish",
        desc:   "description",
        img:    "none",
        alt:    "alt",
        rating: 7
    },
    {
        id:     2,
        title:  "When Gamma collides...",
        desc:   "description",
        img:    "none",
        alt:    "alt",
        rating: 3
    }
]

export default itemsList;