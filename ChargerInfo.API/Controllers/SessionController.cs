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
        public IActionResult GetSession(int sessionId)
        {
            var result = _sessionRepository.GetSession(sessionId);
            if(result == null)
            {
                return NoContent();
            }
            else
            {
                return Ok(result);
            }
          
        }

        [HttpGet]
        public IActionResult GetSessions()
        {
            var results = _sessionRepository.GetSessions().ToList();

            if (results == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(results);
            }

        }

        [HttpPost("StartSession")]
        public IActionResult AddSession([FromBody] Session session)
        {
            ErrorMessage err = ValidateStartSession(session);
            if (!err.State)
            { 
                return BadRequest(err.Message);
            }
            var results = _sessionRepository.AddSession(session); 

            if (results == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(results);
            }
          
        }

        [HttpPut("StopSession")]
        public IActionResult UpdateSessionDetails([FromBody] Session session)
        {
            ErrorMessage err = ValidateStopSession(session);
            if (!err.State)
            {
                return BadRequest(err.Message);
            }
            var results = _sessionRepository.UpdateSessionDetails(session);

            if (results == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(results);
            }
        }

        private ErrorMessage ValidateStartSession(Session session)
        {
            ErrorMessage err = new ErrorMessage();
            string tempStop = session.SessionStopTime.ToString();
            string tempStart = session.SessionStartTime.ToString();
            if (session.ChargerId <= 0 )
            {
                err.Message = "Charger Id is Required";
                err.State = false;
            }
            else if ( session.Status == null)
            {
                err.Message = "Status is Required";
                err.State = false;
            }
            else if ((session.Status != "Started") && (session.Status != "started"))
            {
                err.Message = "Status value should be started";
                err.State = false;
            }

            else if (tempStop != "1/1/0001 12:00:00 AM")
            {
                err.Message = "Stop time is not required for starting a session";
                err.State = false;
            }
            else if (tempStart == "1/1/0001 12:00:00 AM")
            {
                err.Message = "Session Start Time is Required";
                err.State = false;
            }
            else if ( session.Status.ToLower() == "started")
            {
                var ses = _sessionRepository.GetSessions().ToList().Where(n => n.ChargerId == session.ChargerId).ToList();
                if (ses.Count == 0)
                {
                    err.State = true;
                }
                else
                {
                    ses.ForEach(n =>
                    {
                        if (n.Status.ToLower() == "started")
                        {
                            err.Message = "Charger has already an active session";
                            err.State = false;
                        }
                        else
                        {
                            err.State = true;
                        }
                    });
                }
                
            }
            else
            {
                err.State = true;
            }
            return err;
        }

        private ErrorMessage ValidateStopSession(Session session)
        {
            ErrorMessage err = new ErrorMessage();
            string tempStop = session.SessionStopTime.ToString();
            string tempStart = session.SessionStartTime.ToString();
            if (session.Id <= 0)
            {
                err.Message = "Id is Required";
                err.State = false;
            }
            else if (session.Status == null)
            {
                err.Message = "Status is Required";
                err.State = false;
            }
            else if ((session.Status != "Stopped") && (session.Status != "stopped"))
            {
                err.Message = "Status value should be stopped";
                err.State = false;
            }
            else if(tempStart != "1/1/0001 12:00:00 AM" )
            {
                err.Message = "Start time is not required for stopping a session";
                err.State = false;
            }
            else if (tempStop == "1/1/0001 12:00:00 AM")
            {
                err.Message = "Session Stop Time is Required";
                err.State = false;
            }
            else if (session.Status.ToLower() == "stopped")
            {
                var ses = _sessionRepository.GetSession(session.Id);
                DateTime sesStartTime = ses.SessionStartTime;
                DateTime sesStopTime = session.SessionStopTime;
                int result = DateTime.Compare(sesStartTime, sesStopTime);
                if (result > 0)
                {
                    err.Message = "Session stop Time must be greater than Start time";
                    err.State = false;

                }
                else
                {
                    err.State= true;
                }
            }
            else
            {
                err.State = true;
            }
            return err;
        }
    }
}
