using ChargerInfo.API.Entities;
using ChargerInfo.API.Services;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChargerInfo.API.Controllers
{
    [Route("api/session")]
    public class SessionController : Controller
    {
        private readonly ISessionRepository _sessionRepository;
        public SessionController(ISessionRepository sessionRepository)
        {
            _sessionRepository = sessionRepository;
        }

        [HttpGet("{sessionId}")]
        public Session GetSession(int sessionId)
        {
            return _sessionRepository.GetSession(sessionId);

        }

        [HttpGet]
        public List<Session> GetSessions()
        {
            return _sessionRepository.GetSessions().ToList();
        }


        [HttpPost("StartSession")]
        public Session AddSession([FromBody] Session session)
        {
            return _sessionRepository.AddSession(session);

        }

        [HttpPut("StopSession")]
        public Session UpdateSessionDetails([FromBody] Session session)
        {
            return _sessionRepository.UpdateSessionDetails(session);
        }
    }
}
