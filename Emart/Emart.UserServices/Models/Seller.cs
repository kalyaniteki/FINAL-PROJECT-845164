using System;
using System.Collections.Generic;

namespace Emart.UserServices.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Items = new HashSet<Items>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Companyname { get; set; }
        public string Gst { get; set; }
        public string Briefaboutcompany { get; set; }
        public string Postaladdress { get; set; }
        public string Website { get; set; }
        public string Emailid { get; set; }
        public string Mobile { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
