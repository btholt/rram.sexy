/** @jsx React.DOM */
var GalleryModel = Backbone.Model.extend({
  defaults : {
    entries: [
      {title: 'Asset 1', thumbnail: "http://placekitten.com/g/300/300", type: "image", asset:'http://placekitten.com/g/1600/900', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis omnis aliquid itaque quasi? Incidunt, ipsam accusamus minima necessitatibus deserunt corrupti magnam recusandae sint harum eos error vel laborum. Dolorum, sit perspiciatis asperiores repellendus saepe culpa quo eligendi obcaecati quae incidunt.' },
      {title: 'Asset 2', thumbnail: "http://placekitten.com/300/300", type: "youtube", asset:'mhTd4_Ids80', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magnam, quasi suscipit excepturi atque libero enim rerum voluptas facilis numquam iusto aspernatur debitis maiores quae consequatur officia accusantium necessitatibus saepe commodi adipisci nesciunt blanditiis distinctio repudiandae cupiditate ratione! Quo, saepe accusamus aliquid explicabo laborum eaque ratione nostrum vero reiciendis maiores officia sapiente consequuntur amet. Quo, atque odio quae dolore molestias.' },
      {title: 'Asset 3', thumbnail: "http://placekitten.com/g/300/300", type: "image", asset:'http://placekitten.com/g/1600/900', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis omnis aliquid itaque quasi? Incidunt, ipsam accusamus minima necessitatibus deserunt corrupti magnam recusandae sint harum eos error vel laborum. Dolorum, sit perspiciatis asperiores repellendus saepe culpa quo eligendi obcaecati quae incidunt.' },
      {title: 'Asset 4', thumbnail: "http://placekitten.com/g/300/300", type: "image", asset:'http://placekitten.com/g/1600/900', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis omnis aliquid itaque quasi? Incidunt, ipsam accusamus minima necessitatibus deserunt corrupti magnam recusandae sint harum eos error vel laborum. Dolorum, sit perspiciatis asperiores repellendus saepe culpa quo eligendi obcaecati quae incidunt.' },
      {title: 'Asset 5', thumbnail: "http://placekitten.com/g/300/300", type: "image", asset:'http://placekitten.com/g/1600/900', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis omnis aliquid itaque quasi? Incidunt, ipsam accusamus minima necessitatibus deserunt corrupti magnam recusandae sint harum eos error vel laborum. Dolorum, sit perspiciatis asperiores repellendus saepe culpa quo eligendi obcaecati quae incidunt.' }
    ],
    title: 'Gallery',
    background: "TODO",
    directions: {
      up: false,
      left: false,
      down: false,
      right: false
    }
  }
});