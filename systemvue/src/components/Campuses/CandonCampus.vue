<template>
  <div class="row1">
    <div class="text-body">
      <strong>
        <span
          style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 30px; color: rgb(179, 102, 8);"
        >
          Welcome to Candon Campus!
        </span>
      </strong>
      <hr id="sub-hr" />
      <br />
      <div class="md-content">
        <div class="text-body-2">
          <span
            style="font-size: 26px; font-family: Arial, Helvetica, sans-serif;"
            >DR. ANNIE D. DORADA</span
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
		</p>
		<ul>
			<li>
				<router-link to="/Campuses/CandonCampus/CourseOffered/BachelorofScienceinHospitalityManagement">Bachelor of Science in Hospitality Management</router-link>
			</li>
			<li>
				<router-link to="/Campuses/CandonCampus/CourseOffered/BachelorofTourismManagement">Bachelor of Tourism Management</router-link>
			</li>
			<li>
				<router-link to="/Campuses/CandonCampus/CourseOffered/BachelorofScienceinInformationTechnology">Bachelor of Information Technology</router-link>
			</li>
			<li>
				<router-link to="/Campuses/CandonCampus/CourseOffered/BachelorofScienceinSecondaryEducation">Bachelor of Science in Secondary Education</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>Filipino</li>
					</ul>
				</section>
				</div>
			</li>
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
		<strong>Candon City Campus</strong> was formerly the Southern Ilocos Sur School of Fisheries (SISSOF) which evolved from a fishery demonstration farm (Ilocos Sur Marine Demonstration Farm). It is located in the coastal barangay of Darapidap, Candon City. With its integration into the ISPSC, it became the College of Commercial and Social Services. At present Candon City Campus houses the College of Business and Hospitality Management.
  </div>
</div>
</template>

<script>
export default {
  name: 'CandonCampus'
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
  text-decoration: none;
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
</style>
