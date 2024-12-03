using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PizzaDominos.Models;

namespace PizzaDominos.Controllers
{
    public class RimsController : Controller
    {
        private PizzaDBEntities db = new PizzaDBEntities();

        // GET: Rims
        public ActionResult Index()
        {
            return View(db.Rims.ToList());
        }

        // GET: Rims/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Rim rim = db.Rims.Find(id);
            if (rim == null)
            {
                return HttpNotFound();
            }
            return View(rim);
        }

        // GET: Rims/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Rims/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "RimID,RimName,Price")] Rim rim)
        {
            if (ModelState.IsValid)
            {
                db.Rims.Add(rim);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(rim);
        }

        // GET: Rims/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Rim rim = db.Rims.Find(id);
            if (rim == null)
            {
                return HttpNotFound();
            }
            return View(rim);
        }

        // POST: Rims/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "RimID,RimName,Price")] Rim rim)
        {
            if (ModelState.IsValid)
            {
                db.Entry(rim).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(rim);
        }

        // GET: Rims/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Rim rim = db.Rims.Find(id);
            if (rim == null)
            {
                return HttpNotFound();
            }
            return View(rim);
        }

        // POST: Rims/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Rim rim = db.Rims.Find(id);
            db.Rims.Remove(rim);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
