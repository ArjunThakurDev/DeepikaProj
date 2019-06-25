using ChargerInfo.API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ChargerInfo.API.Services
{
    public class SessionRepository : ISessionRepository
    {
        private readonly ChargerInfoContext _context;
        public SessionRepository(ChargerInfoContext context)
        {
            _context = context;
        }

        public Session GetSession(int sessionId)
        {
            return _context.sessions.FirstOrDefault(s => s.Id == sessionId);
        }
        public IEnumerable<Session> GetSessions()
        {
            return _context.sessions.ToList();
        }

        public Session AddSession(Session session)
        {
            
            _context.sessions.Add(session);
            _context.SaveChanges();
            return session;
        }

        public Session UpdateSessionDetails(Session session)
        {
            var sessionFromDb = GetSession(session.Id);

            sessionFromDb.SessionStopTime = session.SessionStopTime;
            sessionFromDb.Status = session.Status;
            _context.sessions.Update(sessionFromDb);
            _context.SaveChanges();
            return session;
        }


    }
}
