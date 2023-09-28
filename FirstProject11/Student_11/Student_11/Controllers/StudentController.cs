using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Student_11.Data;
using Student_11.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_11.Controllers
{
    [Route("api/Student")]
    [ApiController]
    public class StudentController : Controller
    {
        private readonly ApplicationDbContext _context;
        public StudentController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetStudents()
        {
            return Ok(_context.Students.ToList());
        }
        [HttpGet("api/Student/{id}")]
        public IActionResult GetStudent( int id)
        {
            var studentInDb = _context.Students.Find(id);
            if (studentInDb == null) return NotFound();
            return Ok(studentInDb);
        }
    [HttpPost]
    public IActionResult SaveStudent([FromBody]Student student)
    {
      if(student != null && ModelState.IsValid)
      {
        _context.Students.Add(student);
        _context.SaveChanges();
        return Ok();
      }
      return BadRequest();
    }
    [HttpPut]
    public IActionResult UpdateStudent([FromBody]Student student)
    {
      if(student != null && ModelState.IsValid)
      {
        _context.Students.Update(student);
        _context.SaveChanges();
        return Ok();
      }
      return BadRequest();
    }
    [HttpDelete("{id:int}")]
    public IActionResult DeleteStudent(int id)
    {
      var studentInDb = _context.Students.Find(id);
      if (studentInDb == null)
        return NotFound();
      _context.Students.Remove(studentInDb);
      _context.SaveChanges();
      return Ok();
    }
    }
}
