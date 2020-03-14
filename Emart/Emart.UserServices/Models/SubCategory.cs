using System;
using System.Collections.Generic;

namespace Emart.UserServices.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Items = new HashSet<Items>();
        }

        public int Sid { get; set; }
        public string Sname { get; set; }
        public int? Cid { get; set; }
        public string Briefdetails { get; set; }
        public string Gst { get; set; }

        public virtual Category C { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
