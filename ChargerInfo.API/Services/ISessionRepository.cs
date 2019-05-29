using System.Collections.Generic;
using ChargerInfo.API.Entities;

namespace ChargerInfo.API.Services
{
    public interface ISessionRepository
    {
        Session GetSession(int sessionId);
        IEnumerable<Session> GetSessions();
        Session AddSession(Session session);
        Session UpdateSessionDetails(Session session);
    }
}