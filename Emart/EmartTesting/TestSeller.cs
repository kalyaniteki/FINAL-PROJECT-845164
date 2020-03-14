using System;
using System.Collections.Generic;
using System.Text;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using NUnit.Framework;
namespace EmartTesting
{
    [TestFixture]
    class TestSeller
    {
        SellerRepo _repo;
        Itemrepo _itemrepo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepo(new EmartContext());
            _itemrepo = new Itemrepo(new EmartContext());
        }

        [Test]
        public void TestGetProfile()
        {
            var result = _repo.Getprofile(1);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestEditprofile()
        {
            Seller seller = _repo.Getprofile(1);
            seller.Username = "steve";
            _repo.Editprofile(seller);
            Seller seller1 = _repo.Getprofile(1);
            Assert.AreSame(seller, seller1);
        }
        [Test]
        public void TestAddItems()
        {
            Items i = new Items()
            {
                    Itemid=2,
                    Cid=22,
                    Sid=222,
                    Price=789,
                    Itemname="phone",
                    Description="dfdf",
                    Stocknum=4,
                    Remarks="no",
                    Sellerid=2,

            };
            _itemrepo.Additems(i);
            Assert.IsNotNull(i);

        }

        //[Test]
        //public void TestGetItem()
        //{
        //    var result = _itemrepo.GetItems("");
        //    Assert.IsNotNull(result);
        //}
        [Test]
        public void TestGetItems()
        {
            var result = _itemrepo.GetItems(1111);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestViewItems()
        {
            var result = _itemrepo.Viewitems(2);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestCategoryList()
        {
            var result = _itemrepo.GetCategories();
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestSubCategoryList()
        {
            List<SubCategory> result = _itemrepo.GetSubCategories(5);
            Assert.IsNotNull(result);
         
        }
        [Test]
        public void TestUpdateItem()
        {
            Items item = _itemrepo.GetItems(2);
            item.Cid = 11;
            item.Sid = 111;
            _itemrepo.Update(item);
            Items item2 = _itemrepo.GetItems(2);
            Assert.AreEqual(item, item2);
        }
        [Test]
        public void TestDeleteItem()
        {
            _itemrepo.Deleteitems(2);
            var result = _itemrepo.GetItems(2);
            Assert.IsNull(result);
        }
    }


}
