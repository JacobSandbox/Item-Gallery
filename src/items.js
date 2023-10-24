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
        title:  "Can u house?",
        desc:   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:    "Small-house.jpg",
        rating: 5
    },
    {
        id:     1,
        title:  "Beta- not the fish",
        desc:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla est egestas lacinia pulvinar. Integer non gravida nulla, sed placerat lorem. Proin ultrices eget elit at laoreet. Quisque tincidunt id mi ac hendrerit. Cras iaculis nisi felis, id elementum risus faucibus sit amet. Suspendisse vitae auctor lectus. Cras fringilla commodo libero, eu consectetur urna hendrerit vitae. Praesent gravida, velit euismod malesuada interdum, magna lacus pulvinar ex, eget posuere sapien lacus a justo. Ut mattis nibh consequat ante facilisis, vestibulum porttitor ligula feugiat. Fusce eget imperdiet risus.",
        img:    "person-beach.png",
        rating: 7
    },
    {
        id:     2,
        title:  "When Gammas collide...",
        desc:   "Integer massa libero, vulputate imperdiet egestas nec, sagittis sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel facilisis libero. In at dui ac ipsum sodales blandit nec sit amet elit. Integer facilisis, dui nec ultrices tincidunt, ligula elit semper justo, id cursus tortor nisl ac est. Mauris rutrum mattis nisi. Donec pulvinar ornare tincidunt. Ut volutpat porttitor felis, sed cursus ex interdum sed. Quisque nulla tellus, ultricies vel pretium eu, lacinia sit amet nunc. Cras quis tortor vel sem convallis faucibus id aliquet urna. Duis pretium tortor ornare sapien maximus, in tristique augue semper.",
        img:    "canyon.png",
        rating: 3
    },
    {
        id:     3,
        title:  "Award winner",
        desc:   "Integer massa libero, vulputate imperdiet egestas nec, sagittis sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel facilisis libero. In at dui ac ipsum sodales blandit nec sit amet elit. Integer facilisis, dui nec ultrices tincidunt, ligula elit semper justo, id cursus tortor nisl ac est. Mauris rutrum mattis nisi. Donec pulvinar ornare tincidunt. Ut volutpat porttitor felis, sed cursus ex interdum sed. Quisque nulla tellus, ultricies vel pretium eu, lacinia sit amet nunc. Cras quis tortor vel sem convallis faucibus id aliquet urna. Duis pretium tortor ornare sapien maximus, in tristique augue semper.",
        img:    "corn-fields.png",
        rating: 9
    }
]

export default itemsList;