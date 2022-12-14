package jdbc;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MemberManage extends DbManagement {
//	싱글톤
	private static MemberManage mm = new MemberManage();

//	생성자
	private MemberManage() {
	}

	public static MemberManage getInstance() {
		return mm;
	}

	// 풀캘린더 관련(from)
	public List<FullCalendar0905> scheduleList() {
		List<FullCalendar0905> list = new ArrayList<>();
		String sql = "select * from my_calendar";
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				FullCalendar0905 cal = new FullCalendar0905();
				cal.setTitle(rs.getString("title"));
				cal.setStartDate(rs.getString("start_date"));
				cal.setEndDate(rs.getString("end_date"));
				list.add(cal);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	// 풀캘린더 관련(to) 화면에 입력
	public boolean insertCalendar(FullCalendar0905 full) {
		String sql = "insert into my_calendar values(?,?,?)";
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, full.getTitle());
			pstmt.setString(2, full.getStartDate());
			pstmt.setString(3, full.getEndDate());

			int rs = pstmt.executeUpdate();
			if (rs > 0)
				return true;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}
	
	
	//풀캘린더 관련(del)삭제
	public boolean deleteCalendar(FullCalendar0905 full) {
		String sql = "delete from my_calendar where title=?";
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, full.getTitle());
			
			int rs = pstmt.executeUpdate();
			if(rs > 0)
				return true;
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return false; 
	}

//	로그인 메소드
	public Member loginInfo(String id) {
		Member member = null;
		try {
			conn();
			String sql = "SELECT * FROM bankmember WHERE member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();

			if (rs.next()) {
				member = new Member();
				member.setMemberId(rs.getString("member_id"));
				member.setMemberPw(rs.getString("member_pw"));
				member.setMemberName(rs.getString("member_name"));
				member.setRole(rs.getString("role"));
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return member;
	}

//	고객 등록 메소드, 멤버 서비스에서 찾아옴 고객 정보가 필요하니 매개변수는 정보가 담긴 멤버로 정함
	public int registCustomer(Member member) {
		int result = 0;
		try {
			conn();
			String sql = "INSERT INTO bankmember "//
					+ "(member_id, member_pw, member_name, role)"//
					+ "VALUES (?,?,?,?)";//
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member.getMemberId());
			pstmt.setString(2, member.getMemberPw());
			pstmt.setString(3, member.getMemberName());
			pstmt.setString(4, member.getRole());
			result = pstmt.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return result;
	}

	// 전체 멤버를 반환하는 메소드
	public List<Member> getMembers() {
		List<Member> list = new ArrayList<>();
		try {
			conn();
			pstmt = conn.prepareStatement("select * from bankmember");
			rs = pstmt.executeQuery();
			while (rs.next()) {
				Member mem = new Member();
				mem.setMemberId(rs.getString("member_id"));
				mem.setMemberPw(rs.getString("member_pw"));
				mem.setMemberName(rs.getString("member_name"));
				mem.setRole(rs.getString("role"));
				list.add(mem);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}// end of getMembers();

	// 아이디를 기준으로 삭제 처리 후 정상 처리되면 true, 그렇지 않으면 false를 반환
	public boolean delMember(String id) {
		try {
			conn();
			String sql = "delete from bankmember where member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);

			int r = pstmt.executeUpdate();
			if (r > 0) {
				return true; // 정상 처리 완료
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false; // 정상 처리 안된 경우
	}

	public boolean updateMember(Member member) {
		try {
			conn();
			String sql = "update bankmember set member_pw=?, member_name =?, role = ? where member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member.getMemberPw());
			pstmt.setString(2, member.getMemberName());
			pstmt.setString(3, member.getRole());
			pstmt.setString(4, member.getMemberId());

			int rs = pstmt.executeUpdate();

			if (rs > 0) {
				return true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}
}