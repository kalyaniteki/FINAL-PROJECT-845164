using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BuyerController : ControllerBase
    {
        private readonly Ibuyer _repo;
        public BuyerController(Ibuyer repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("Buy")]
        
        public IActionResult BuyItem(PurchaseHistory item)
        {
            try
            {
                _repo.BuyItem(item);
                return Ok();

            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("Addcart")]
        public IActionResult AddToCart(Cart cart)
        {
            try
            {
                _repo.AddToCart(cart);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }
        [HttpGet]
        [Route("Viewcart/{id}")]

        public IActionResult ViewCart(int id)
        {
            try
            {
                return Ok(_repo.ViewCart(id));


            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }


        [HttpPut]
        [Route("Edit")]
        public IActionResult EditProfile(Buyer buyer)
        {
            try
            {
                _repo.EditProfile(buyer);
                return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetP/{id}")]
        
        public IActionResult Getprofile(int id)
        {
            try
            {
                return Ok(_repo.Getprofile(id));
              

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Getcart/{id}")]

        public IActionResult GetCart(int id)
        {
            try
            {
                return Ok(_repo.GetCart(id));


            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("delcart/{id}")]
        public IActionResult Deletecart(int id)
        {
            try
            {
                _repo.Deletecart(id);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("Search/{Iname}")]
        public IActionResult SearchItems(string Iname)
        {
            try
            {
                return Ok(_repo.SearchItems(Iname));
                

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("History/{bid}")]
        public IActionResult TransactionHistory(int bid)
        {
            try
            {
                return Ok(_repo.TransactionHistory(bid));
               

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetC")]
        public IActionResult GetCategories()
        {
            try
            {
                return Ok(_repo.GetCategories());
            
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetS/{categoryid}")]
        public IActionResult GetSubCategories(int categoryid)
        {
            try
            {
                return Ok(_repo.GetSubCategories(categoryid));
                

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

    }
}