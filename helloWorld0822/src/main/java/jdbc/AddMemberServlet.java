package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/addMemberServlet")
public class AddMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public AddMemberServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1.사용자 요청정보를 param이 읽어줘야함
		request.setCharacterEncoding("utf-8"); // 2.읽을 때 한글 처리
		response.setContentType("text/json;charset=utf-8");

		String id = request.getParameter("mid");
		String pw = request.getParameter("mpw");
		String name = request.getParameter("mname");
		System.out.println(id);
		System.out.println(pw);
		System.out.println(name);
		Member member = new Member();
		member.setMemberId(id);
		member.setMemberPw(pw);
		member.setMemberName(name);

		MemberManage dao = MemberManage.getInstance();
		int addCnt = dao.registCustomer(member);
		// 3.처리결과는 ajax를 호출한 페이지로 반환
		if (addCnt == 1) {
			String json = "{\"retCode\": \"success\", \"memberId\": \"" + id + "\", \"memberPw\": " + pw
					+ ", \"memberName\": \"" + name + "\"}";
			response.getWriter().print(json);

		} else {
			String json = "{\"retCode\": \"fail\"}";
			response.getWriter().print(json);
		}
	}
}
