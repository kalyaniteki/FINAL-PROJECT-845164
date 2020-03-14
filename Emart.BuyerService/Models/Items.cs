﻿using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Items
    {
        public Items()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Itemid { get; set; }
        public int? Cid { get; set; }
        public int? Sid { get; set; }
        public int Price { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public int? Stocknum { get; set; }
        public string Remarks { get; set; }
        public int? Sellerid { get; set; }
        public string Image { get; set; }

        public virtual Category C { get; set; }
        public virtual SubCategory S { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
