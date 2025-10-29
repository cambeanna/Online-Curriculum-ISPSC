<template>
  <div class="row1">
    <div class="text-body">
      <strong>
        <span
          style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 30px; color: rgb(179, 102, 8);"
        >
          Welcome to Cervantes Campus!
        </span>
      </strong>
      <hr id="sub-hr" />
      <br />
      <div class="md-content">
        <div class="text-body-2">
          <span
            style="font-size: 26px; font-family: Arial, Helvetica, sans-serif;"
            >DR. HEIDI JOY P. BAUTISTA</span
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
			<strong>UNDERGRADUATE PROGRAMS</strong>
		</p><br>
		<ul>
				<router-link to="#">Bachelor of Secondary Education</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
						<li><router-link to="/">Mathematics</router-link></li>
						<li><router-link to="/">English</router-link></li>
						<li><router-link to="/">Science</router-link></li>
				</section>
			</div>
				<router-link to="/Campuses/CervantesCampus/CourseOffered/BachelorofElementaryEducation">Bachelor of Elementary Education</router-link>
				<br>
				<router-link to="/Campuses/CervantesCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation">Bachelor of Technology and Livelihood Education</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>Home Economics</li>
						<li>Agri-Fishery Arts</li>
					</ul>
				</section>
				</div>
				<router-link to="/Campuses/CervantesCampus/CourseOffered/BachelorofTechnicalVocationalTeacherEducation">Bachelor of Technical-Vocational Teacher Education</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>Food and Service Management</li>
						<li>Agricultural Crops Production</li>
					</ul>
				</section>
				</div>
				<router-link to="/Campuses/CervantesCampus/CourseOffered/BachelorofScienceinScienceinInformationTechnology">Bachelor of Science in Information Technology</router-link>
				<br>
				<router-link to="/Campuses/CervantesCampus/CourseOffered/BachelorofScienceinCriminology">Bachelor of Science in Criminology</router-link>
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
		<strong>Cervantes Campus</strong> was formerly the Cervantes National Agro-Industrial School (CNAIS) which evolved from the Cervantes National School of Arts and Trades established by virtue of RA 4424 signed into law in June 19, 1965. It is located in a scenic upland municipality which is also a gateway to the Cordillera provinces. When it was integrated into ISPSC, it became the College of Agro-Industrial Technology. Presently, Cervantes Campus offers teacher education, information technology and hotel and restaurant management courses.
  </div>
</div>
</template>

<script>
export default {
  name: 'CervantesCampus'
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

.brief-history {
	text-align: justify;
}

.major-sub {
	margin-left: 40px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
