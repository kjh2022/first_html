package jdbc;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@WebServlet("/myCalendar")
public class MyCalendarServlet extends HttpServlet {

	public MyCalendarServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");

		MemberManage dao = MemberManage.getInstance();
		List<FullCalendar0905> list = dao.scheduleList();
		// [{"title":"데이트"}, {"start":"2022-09-05"}, {"end" : "2022-09-10"},....]
		JsonArray ary = new JsonArray();
		for (FullCalendar0905 cal : list) {
			JsonObject obj = new JsonObject();
			obj.addProperty("title", cal.getTitle());// addProperty("정할 이름", 원래 들어갈 값);
			obj.addProperty("start", cal.getStartDate());
			obj.addProperty("end", cal.getEndDate());
			ary.add(obj);
		}

		Gson gson = new GsonBuilder().create(); // instance생성
		String json = gson.toJson(ary); // 메소드 toJson(cal) cal을 json형태로 변환
		response.getWriter().print(json);// 출력스트림으로 풀력
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("utf-8");

		String job = request.getParameter("job");
		if (job.equals("insert")) {
			FullCalendar0905 full = new FullCalendar0905();
			full.setTitle(request.getParameter("title"));
			full.setStartDate(request.getParameter("start"));
			full.setEndDate(request.getParameter("end"));
			MemberManage dao = MemberManage.getInstance();
			if (dao.insertCalendar(full)) {
				response.getWriter().print("success");
			} else {
				response.getWriter().print("fail");
			}
		} else if (job.equals("dele")) {
			// 삭제처리
			FullCalendar0905 full = new FullCalendar0905();
			full.setTitle(request.getParameter("title"));
			MemberManage dao = MemberManage.getInstance();
			if (dao.deleteCalendar(full)) {
				response.getWriter().print("success");
			} else {
				response.getWriter().print("fail");
			}
		}
	}
}
