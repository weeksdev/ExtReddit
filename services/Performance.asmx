<%@ WebService Language="C#" Class="Performance" %>

using System;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;

[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
// [System.Web.Script.Services.ScriptService]
public class Performance  : System.Web.Services.WebService {

    [WebMethod]
    public void GetCpu()
    {
        System.Diagnostics.PerformanceCounter cpuCounter = new System.Diagnostics.PerformanceCounter(
            "Processor", 
            "% Processor Time", 
            "_Total"
        );
        var val = cpuCounter.NextValue();
        Context.Response.Write(Newtonsoft.Json.JsonConvert.SerializeObject(val));
    }
    
}