﻿using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Category
    {
        public Category()
        {
            Items = new HashSet<Items>();
            SubCategory = new HashSet<SubCategory>();
        }

        public int Cid { get; set; }
        public string Cname { get; set; }
        public string Briefdetails { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}
