using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Repositories;
using Emart.SellerService.Models;
using Microsoft.AspNetCore.Authorization;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
   
    public class SellerController : ControllerBase
    {
        private readonly ISeller _repo;
        public SellerController(ISeller repo)
        {
            _repo = repo;
        }
        [HttpPut]
        [Route("Edit/")]
        public IActionResult Editprofile(Seller seller)
        {
            try
            {
                _repo.Editprofile(seller);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Get/{id}")]
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
    }
}