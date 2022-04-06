const { Product } = require("../models");

const productData = [
  {
    product_name: "LG Monitor",
    price: 20,
    stock: 5,
    category_id: 1,
    product_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis augue pellentesque purus efficitur consequat. Suspendisse tempor nunc sed risus volutpat, nec tincidunt nunc suscipit. Vestibulum tincidunt gravida nunc, vel malesuada arcu. Mauris velit ex, consequat eu ante vel, rutrum efficitur urna.",
  },
  {
    product_name: "Samsung Monitor",
    price: 30,
    stock: 5,
    category_id: 1,
    product_desc:
      "Proin molestie dolor suscipit tellus congue, varius porttitor velit aliquet. Aenean eget lacus eu dui mollis faucibus. Donec sit amet feugiat purus. Etiam et dolor lorem. Nam nec enim at nulla lacinia efficitur sit amet rhoncus metus.",
  },
  {
    product_name: "Dell Monitor",
    price: 10,
    stock: 2,
    category_id: 1,
    product_desc:
      "Sed ornare urna nec ligula porta vehicula. Aenean commodo, nisi sit amet tempus ornare, mi nulla tincidunt odio, a fermentum leo nisl eget dolor. Ut suscipit interdum nisl, non eleifend sapien aliquam eu.",
  },
  {
    product_name: "Philips Monitor",
    price: 5,
    stock: 5,
    category_id: 1,
    product_desc:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam neque purus, tristique ultricies posuere id, convallis vitae felis. Morbi ultrices venenatis nibh, vel malesuada velit tincidunt sed. Vivamus quis ipsum enim. Integer eget commodo elit, eget iaculis elit. Ut placerat facilisis ipsum quis ultricies.",
  },
  {
    product_name: "LG Disks",
    price: 20,
    stock: 5,
    category_id: 2,
    product_desc:
      "Phasellus imperdiet ut velit quis vestibulum. Vivamus ut mattis tellus, facilisis pharetra arcu. Donec id elit ut elit interdum venenatis eget tristique justo. Mauris eu vulputate augue. Aenean interdum elit pretium enim malesuada consequat. Donec rhoncus, odio sit amet dapibus dictum, neque tortor vestibulum velit, id rutrum metus massa at arcu.",
  },
  {
    product_name: "Samsung Disks",
    price: 20,
    stock: 5,
    category_id: 2,
    product_desc:
      "Maecenas sit amet malesuada erat. Sed hendrerit accumsan nunc. Nam at eros pretium ipsum cursus ultricies a id ex. Quisque condimentum sodales ullamcorper. Cras at aliquet lectus. Nam ligula urna, laoreet non pharetra ut, aliquam sed nisi. Nulla facilisi. Sed feugiat et tortor et lobortis.",
  },
  {
    product_name: "Dell Disks",
    price: 20,
    stock: 5,
    category_id: 2,
    product_desc:
      "Morbi eu arcu ex. Morbi placerat urna sed scelerisque consequat. Curabitur hendrerit justo vitae magna semper efficitur. Cras et varius leo. Nullam a efficitur metus. Aenean quis rhoncus turpis. Duis vitae condimentum dolor, nec tristique tortor. Quisque non fringilla lacus, id rhoncus est.",
  },
  {
    product_name: "Philips Disks",
    price: 20,
    stock: 5,
    category_id: 2,
    product_desc:
      "Donec nisi ligula, tempus id urna et, malesuada cursus augue. Nunc massa dui, lobortis et quam vel, sollicitudin elementum elit. Mauris vitae tincidunt dolor, vel iaculis enim. Suspendisse elementum consectetur lacus, commodo dapibus ante luctus non.",
  },
  {
    product_name: "LG Keyboad",
    price: 20,
    stock: 5,
    category_id: 3,
    product_desc:
      "Sed mollis, leo at vehicula elementum, sapien justo ultrices nisl, non sollicitudin odio lacus a felis. Suspendisse egestas quam turpis, dignissim dignissim velit gravida et. Integer non augue elit. Praesent laoreet fermentum elementum. Nam ut ipsum vel tortor ullamcorper mollis nec in ante. Ut ultrices tincidunt gravida. Vivamus ligula quam, laoreet sed ultricies eu, pharetra nec dolor. Duis eu ex vel enim gravida mollis. Mauris lacinia, magna vitae sagittis suscipit, urna nibh ultricies leo, et dapibus eros erat vel libero.",
  },
  {
    product_name: "Samsung Keyboad",
    price: 20,
    stock: 5,
    category_id: 3,
    product_desc:
      "Maecenas diam nunc, sollicitudin eu rhoncus quis, viverra non augue. Aenean vel metus tempus felis malesuada pretium vel eu libero. Proin at urna imperdiet, finibus enim id, semper libero. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris consectetur malesuada porta. Vivamus ut convallis massa, vel scelerisque tortor.",
  },
  {
    product_name: "Dell Keyboad",
    price: 20,
    stock: 5,
    category_id: 3,
    product_desc:
      "Proin condimentum lorem ut enim molestie, et consequat massa tristique. Sed eget tincidunt tortor, et sagittis odio. Pellentesque id erat sem. Curabitur pharetra tincidunt porttitor. Nullam vitae nibh ac lacus lacinia egestas. Curabitur lacinia, nisi at pellentesque faucibus, nisi eros placerat magna, quis mattis ex leo quis neque. Integer congue commodo metus, quis cursus urna finibus eget. Cras mattis nibh purus, vel ornare mi auctor tristique. Proin eu bibendum leo.",
  },
  {
    product_name: "Philips Keyboad",
    price: 20,
    stock: 5,
    category_id: 3,
    product_desc:
      "Morbi massa tellus, vulputate id venenatis sit amet, suscipit a arcu. Nunc feugiat risus a volutpat consectetur. Nullam porta dapibus dolor. Morbi tellus ligula, accumsan a sem eu, mollis imperdiet nibh. Vestibulum vitae sollicitudin turpis, id ultrices dolor. Donec consequat et ipsum in consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    product_name: "LG VCR",
    price: 20,
    stock: 5,
    category_id: 4,
    product_desc:
      "Nam eu mattis ipsum. Duis euismod libero id lacinia consectetur. Nulla pretium commodo mauris, ut facilisis odio fringilla ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut finibus blandit nisi lobortis consectetur. Donec in vulputate sapien. ",
  },
  {
    product_name: "Samsung VCR",
    price: 20,
    stock: 5,
    category_id: 4,
    product_desc:
      "Nullam luctus orci quis massa lobortis, vel tincidunt metus gravida. Donec rutrum ac sapien sed viverra. Sed ultricies mi mauris. Nunc maximus massa a magna placerat lacinia. ",
  },
  {
    product_name: "LG VCR",
    price: 20,
    stock: 5,
    category_id: 4,
    product_desc:
      "Etiam faucibus ligula eu dolor tincidunt, ut congue ligula vehicula. Aliquam et tincidunt tellus. Fusce sagittis augue non quam dignissim, ac ultricies odio volutpat. Suspendisse sollicitudin neque ac risus eleifend rutrum. Phasellus eleifend volutpat ipsum et fermentum. In luctus euismod commodo. Cras euismod gravida condimentum.",
  },
  {
    product_name: "Philips VCR",
    price: 20,
    stock: 5,
    category_id: 4,
    product_desc:
      "Praesent eu sapien nisi. In nec nulla et arcu porta luctus. In finibus eros eu tempus tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at viverra tortor. Aliquam venenatis, mi in interdum interdum, tellus nulla commodo lacus, vel posuere sapien nisl a diam. Cras sodales venenatis tortor, a dignissim erat mollis et. Aenean sem enim, vestibulum id odio et, posuere ornare neque.",
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
