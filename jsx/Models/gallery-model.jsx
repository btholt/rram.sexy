var GalleryModel = Backbone.Model.extend({
  defaults : {
    entries: [
      {title: 'Asset 1', thumbnail: "http://placekitten.com/g/300/300", type: "image", asset:'http://placekitten.com/g/1600/900'},
      {title: 'Asset 2', thumbnail: "http://placekitten.com/g/300/300", type: "image", asset:'http://placekitten.com/g/1600/900'},
      {title: 'Asset 3', thumbnail: "http://placekitten.com/g/300/300", type: "image", asset:'http://placekitten.com/g/1600/900'},
      {title: 'Asset 4', thumbnail: "http://placekitten.com/g/300/300", type: "image", asset:'http://placekitten.com/g/1600/900'},
      {title: 'Asset 5', thumbnail: "http://placekitten.com/g/300/300", type: "image", asset:'http://placekitten.com/g/1600/900'}
    ],
    title: 'Gallery',
    directions: {
      up: false,
      left: false,
      down: false,
      right: false
    }
  }
});