<%@ WebService Language="C#" Class="reddit" %>

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Net;
using System.IO;

/// <summary>
/// Summary description for reddit
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
// [System.Web.Script.Services.ScriptService]
public class reddit : System.Web.Services.WebService {

    public reddit () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }
    public class data
    {
        public string subreddit_id { get; set; }
        public string banned_by { get; set; }
        public string subreddit { get; set; }
        public string likes { get; set; }
        public string saved { get; set; }
        public string id { get; set; }
        public string gilded { get; set; }
        public string author { get; set; }
        public string parent_id { get; set; }
        public string approved_by { get; set; }
        public string body { get; set; }
        public string downs { get; set; }
        public string ups { get; set; }
        public string body_html { get; set; }
        public string link_id { get; set; }
        public string name { get; set; }
        public string created { get; set; }
        public replies replies { get; set; }
    }
    public class comment
    {
        public string kind { get; set; }
        public data data { get; set; }
        public bool leaf { get; set; }
    }
    public class replynesting
    {
        public string kind { get; set; }
        public List<comment> children { get; set; }
    }
    public class replies
    {
        public string kind { get; set; }
        public replynesting data { get; set; }
    }
    
    [WebMethod]
    public void parse(string url)
    {
        //create request object
        WebRequest request = WebRequest.Create(url);
        //Use the default credentials.
        request.UseDefaultCredentials = true;
        //Set user-agent to reflect what app we are coming from.
        ((HttpWebRequest)request).UserAgent = "ExtJS Reddit App; https://github.com/weeksdev/ExtReddit";
        // Get the response.
        WebResponse response = request.GetResponse();
        // Display the status.
        Console.WriteLine(((HttpWebResponse)response).StatusDescription);
        // Get the stream containing content returned by the server.
        Stream dataStream = response.GetResponseStream();
        // Open the stream using a StreamReader for easy access.
        StreamReader reader = new StreamReader(dataStream);
        // Read the content.
        string responseFromServer = reader.ReadToEnd();
        // Display the content.
        Console.WriteLine(responseFromServer);
        // Clean up the streams and the response.
        reader.Close();
        response.Close();
        dynamic returnObj = Newtonsoft.Json.JsonConvert.DeserializeObject(responseFromServer);
        
        var comments = Newtonsoft.Json.JsonConvert.DeserializeObject<List<comment>>(Newtonsoft.Json.JsonConvert.SerializeObject(returnObj[1].data.children));
        
        HttpContext.Current.Response.Write(Newtonsoft.Json.JsonConvert.SerializeObject(comments));
    }
    
}
