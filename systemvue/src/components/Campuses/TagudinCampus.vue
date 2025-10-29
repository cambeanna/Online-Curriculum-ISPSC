<template>
  <div class="row1">
    <div class="text-body">
      <strong>
        <span
          style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 30px; color: rgb(179, 102, 8);"
        >
          Welcome to Tagudin Campus!
        </span>
      </strong>
      <hr id="sub-hr" />
      <br />
      <div class="md-content">
        <div class="text-body-2">
          <span
            style="font-size: 26px; font-family: Arial, Helvetica, sans-serif;"
            >DR. EDERLINA M. SUMAIL</span
          >
          <div class="text-sub">Campus Administrator</div>
        </div>
      </div>
	  <hr>
	  <div class="col-sm-1">
		<span
            style="font-size: 26px; font-family: Arial, Helvetica, sans-serif;"
            >DEANS OF COLLEGES</span>
			<br>
			<br>
		<p>
			<span style="font-size:18px;">
			<strong>DR. JOCELYN ABSOLOR</strong></span>
			<br>
			Dean of Graduate School&nbsp;
		</p>
		<br>
		<p>
			<span style="font-size:18px;">
			<strong>DR. ARMANDO D. DIGA</strong></span>
			<br>
			Dean of College of Agriculture, Forestry and Engineering&nbsp;
		</p>
		<br>
		<p>
			<span style="font-size:18px;">
			<strong>DR. JEANNO M. MANZANO</strong></span>
			<br>
			Dean of College of Teacher Education&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		</p>
		<br>
		<p>
			<span style="font-size:18px;">
			<strong>DR. JOY G. BEA</strong></span>
			<br>
			Dean of College of Computing Studies &nbsp; &nbsp; &nbsp;
		</p>
		<br>
		<p>
			<span style="font-size:18px;">
			<strong>DR. JOANNA MARIE T. GUARIN</strong></span>
			<br>
			Dean of College of Business, Management and &nbsp; Entrepreneurship &nbsp;
		</p>
		<br>
		<p>
			<span style="font-size:18px;">
			<strong>DR. ARLENE P. ABLOG</strong></span>
			<br>
			Principal, Laboratory High School &nbsp;
		</p>
	  </div>
      <div class="course">
		<p>Courses Offered:</p>
      </div>
    </div>
	<br>
	<a class="course_1">
		<p>
			<strong>GRADUATE PROGRAMS</strong>
		</p>
		<ul>
			<li>
				<router-link to="/">Master of Science in Education</router-link>
				<div class="major-sub">
				<section><i>Major:</i>
					<ul>
						<li>
							General Education
						</li>
						<li>
							General Science
						</li>
						<li>
							English
						</li>
						<li>
							Mathematics
						</li>
					</ul>
				</section>
			</div>
			</li>
			<li>
				<router-link to="/">Master of Arts in Education</router-link>
				<div class="major-sub">
				<section><i>Major:</i>
					<ul>
						<li>
							Educational Management
						</li>
					</ul>
				</section>
			</div>
			</li>
		</ul>
		<br>
		<p>
			<strong>UNDERGRADUATE PROGRAMS</strong>
		</p>
		<ul>
			<li>
				<router-link to="/">Bachelor of Secondary Education</router-link>
				<div class="major-sub">
				<section><i>Major:</i>
					<ul>
						<li>
							English
						</li>
						<li>
							Mathematics
						</li>
						<li>
							Science
						</li>
						<li>
							Filipino
						</li>
						<li>
							Social Studies
						</li>
					</ul>
				</section>
			</div>
			</li>
			<li>
				<router-link to="/">Bachelor of Elementary Educaiton</router-link>
			</li>
			<li>
				<router-link to="/">Bachelor of Physical Educaiton</router-link>
			</li>
			<li>
				<router-link to="/">Bachelor of Science in Business Administration</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>Human Resource Management</li>
						<li>Marketing Management</li>
						<li>Financial Management</li>
					</ul>
				</section>
				</div>
			</li>
			<li>
				<router-link to="/">Bachelor of Science in Mathematics</router-link>
			</li>
			<li>
				<router-link to="/">Bachelor of Arts in English Language</router-link>
			</li>
			<li>
				<router-link to="/">Bachelor of Arts in Psychology</router-link>
			</li>
			<li>
				<router-link to="/">Bachelor of Arts in Social Science</router-link>
			</li>
			<li>
				<router-link to="/">Bachelor of Science in Entrepreneurship</router-link>
			</li>
			<li>
				<router-link to="/">Bachelor of Science in Information Technology</router-link>
			</li>
		</ul>
		<br>
		<strong>JUNIOR HIGH SCHOOL</strong>
		<br>
		<strong>SENIOR HIGH SCHOOL</strong>
		<ul>
			<div class="strands">
				<section>
					<i>Strands:</i>
					<ul>
						<li>STEM</li>
						<li>GAS</li>
						<li>HUMSS</li>
						<li>ICT</li>
					</ul>
				</section>
				</div>
		</ul>
	</a>
	<br>
	<br>
	<br>
	<hr>
		<div class="brief-history">
		<p style="text-align: center;">
			<br>
		<strong>Brief History</strong></p>
		<strong>Tagudin Campus</strong> is the seat of governance in the South Cluster. It was known formerly as the Tagudin General Comprehensive High School established which started as the Tagudin High School and became a national high school by virtue of RA 4447 which was signed into law in June 19, 1965. After its integration into ISPSC, it became the College of Arts and Sciences. Today it houses the College of Teacher Education, the College of Business and Hospitality Management, the College of Arts and Sciences, and the College of Information Technology.
  </div>
</div>
</template>

<script>
export default {
  name: 'TagudinCampus'
}
</script>

<style>
.row1 {
  padding: 40px;
}

.list {
  font-size: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
}

#sub-hr {
  color: rgb(180, 17, 17);
  margin-top: 10px;
}

.text-body-3 {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin-top: 10px;
  text-decoration: underline;
  color: black;
  font-size: 20px;
}

.text-body-3.active,
.text-body-3:hover {
  border-bottom-color: #0f9531;
}

.text-sub {
  font-size: 14px;
  font-style: italic;
  font-family: monospace;
}

.md-content{
	padding: 22px;
}

.col-sm-1 {
	float: right;
	margin-right: 140px;
	margin-top: 10px;
}

.course {
	color: rgb(0, 0, 0);
	font-family: Georgia, 'Times New Roman', Times, serif;
	margin-top: 450px;
	font-size: 30px;
	text-align: justify;
}

.course_1 {
  text-align: justify;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.course_1 a:hover {
  color: #a1900e;
}

.course_1 a {
  text-decoration: none;
  font-size: 18px;
  padding: 15px;
}

.course_2 {
  text-align: justify;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.course_2 a:hover {
  color: #a1900e;
}

.course_2 a {
  text-decoration: none;
  font-size: 18px;
  padding: 15px;
}

.brief-history {
	text-align: justify;
}

.major-sub {
	margin-left: 40px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.strands {
	margin-left: 40px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
