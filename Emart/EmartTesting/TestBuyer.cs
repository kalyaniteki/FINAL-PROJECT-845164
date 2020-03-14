using System;
using System.Collections.Generic;
using System.Text;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using NUnit.Framework;

namespace EmartTesting
{
    [TestFixture]
    class TestBuyer
    {
        BuyerRepo _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new BuyerRepo(new EmartContext());
        }

        [Test]
        public void TestGetProfile()
        {
            var result = _repo.Getprofile(1);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestSearch()
        {
            List<Items> ii = _repo.SearchItems("Dress");
            Assert.IsNotNull(ii);
            Assert.Greater(ii.Count, 1);
        }
        [Test]
        public void TestBuyItem()
        {
            PurchaseHistory p = new PurchaseHistory()
            {
                Pid = 37,
                Buyerid = 1,
                Sellerid = 1,
                TransactionType = "COD",
                TransactionStatus = "paid",
                Itemid = 793,
                NumOfItems = 2,
                Datetime = System.DateTime.Now,
                Remarks = "no"

            };
            _repo.BuyItem(p);
            Assert.IsNotNull(p);
        }
        [Test]
        public void TestAddcart()
        {
            Cart c = new Cart()
            {
                Buyerid = 3,
                Cartid = 6,
                Itemname = "Dress",
                Price = 6778,
                Description = "ywteuhdj",
                Image = "cart.jpg"
            };
            _repo.AddToCart(c);
            Assert.IsNotNull(c);
        }
        [Test]
        public void TestViewCart()
        {
            List<Cart> cart = _repo.ViewCart(3);
            Assert.IsNotNull(cart);
            Assert.Greater(cart.Count, 5);

        }
        [Test]
        public void TestGetcategory()
        {
            List<Category> c = _repo.GetCategories();
            Assert.IsNotNull(c);

        }
        [Test]
        public void TestGetSubCategory()
        {
            List<SubCategory> sc = _repo.GetSubCategories(22);
            Assert.IsNotNull(sc);
            Assert.Greater(sc.Count, 0);
        }
        [Test]
        public void TestGetCart()
        {
            var res = _repo.GetCart(6);
            Assert.IsNotNull(res);
        }
        [Test]
        public void TestDeleteCart()
        {
             _repo.Deletecart(16450);
            var result = _repo.GetCart(16450);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestTransactionHistory()
        {
            List<PurchaseHistory> ph = _repo.TransactionHistory(3);
            Assert.IsNotNull(ph);
            Assert.Greater(ph.Count, 8);

        }
        [Test]
        public void TestEditprofile()
        {
            Buyer buyer = _repo.Getprofile(9);
            buyer.Username = "JJJ";
            _repo.EditProfile(buyer);
            Buyer buyer1 = _repo.Getprofile(9);
            Assert.AreSame(buyer,buyer1);

        }
    }
}
