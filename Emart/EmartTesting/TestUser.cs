using NUnit.Framework;
using Emart.UserServices.Models;
using Emart.UserServices.Repositories;
using System;

namespace EmartTesting
{
    [TestFixture]
    public class TestUser
    {
        UserRep _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new UserRep(new EmartContext());
        }

        [Test]
        public void TestAddBuyer()
        {


            Buyer b = new Buyer()
            {

                Id = 90,
                Username = "JJJ",
                Password = "JJ123",
                Emailid = "JJ@123",
                Mobile = "11111343",
                Createddatetime = System.DateTime.Now

            };
            _repo.BuyerRegister(b);
            Assert.IsNotNull(b);

        }
        [Test]
        public void TestAddSeller()
        {


            Seller s = new Seller()
            {

               Id=87,
               Username="emmmm",
               Password="emre123",
               Companyname="emrecompany",
               Gst="454545",
               Briefaboutcompany="The best way to explore your requirements1",
               Postaladdress="H-No:-1-571",
               Website="Samsung.com1",
              Emailid="Adc@gmail.com1",
              Mobile="7890345231",
              

            };
            _repo.SellerRegister(s);
            Assert.IsNotNull(s);

        }
        [Test]
        public void TestBuyerLogin()
        {
            string bname = "will";
            string bpass = "will123";
            Buyer result = _repo.BuyerLogin(bname,bpass);
            Assert.IsNotNull(result);
            
        }
        [Test]
        public void TestSellerLogin()
        {
            string sname = "steve";
            string spass = "steve555";
            Seller result = _repo.SellerLogin(sname, spass);
            Assert.IsNotNull(result);

        }

    }
}