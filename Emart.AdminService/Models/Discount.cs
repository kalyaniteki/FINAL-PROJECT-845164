﻿using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Discount
    {
        public int Did { get; set; }
        public string DiscountCode { get; set; }
        public decimal Percentage { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Description { get; set; }
    }
}
