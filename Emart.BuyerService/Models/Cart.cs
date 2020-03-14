using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Cart
    {
        public int? Buyerid { get; set; }
        public int Cartid { get; set; }
        public int Price { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int? Itemid { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Items Item { get; set; }
    }
}
