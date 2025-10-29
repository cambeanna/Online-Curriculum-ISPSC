<template>
  <div class="row1">
    <div class="text-body">
      <strong>
        <span
          style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 30px; color: rgb(179, 102, 8);"
        >
          Welcome to Narvacan Campus!
        </span>
      </strong>
      <hr id="sub-hr" />
      <br />
      <div class="md-content">
        <div class="text-body-2">
          <span
            style="font-size: 26px; font-family: Arial, Helvetica, sans-serif;"
            >DR. EMED MANZANO</span
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
				<router-link to="/Campuses/NarvacanCampus/CourseOffered/BachelorofScienceinFisheries">Bachelor of Science in Fisheries</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>Aquaculture</li>
						<li>Capture Fisheries</li>
						<li>Post Harvest</li>
						<li>General Fisheries</li>
					</ul>
				</section>
				</div>
			</li>
			<li>
				<router-link to="/Campuses/NarvacanCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation2">Bachelor of Technology & Livelihood Education</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>Home Economics</li>
						<li>Agri-Fishery Arts</li>
					</ul>
				</section>
				</div>
			</li>
			<li>
				<router-link to="/Campuses/NarvacanCampus/CourseOffered/BachelorofTechnicalVocationalTeacherEducation1">Bachelor of Technical-Vocational Teacher Education</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>Fish Processing</li>
						<li>Aquaculture</li>
					</ul>
				</section>
				</div>
			</li>
			<li>
				<router-link to="/Campuses/NarvacanCampus/CourseOffered/BachelorofPhysicalEducation1">Bachelor of Physical Education</router-link>
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
		<strong>Narvacan Campus</strong> is formerly the Narvacan School of Fisheries which was established in 1964 by virtue of RA 3476 authored by Cong. Pablo C. Sanidad which was signed into law in June 16, 1962. When it was integrated into ISPSC, the Narvacan Campus became the College of Fisheries and Marine Science. Today, it is identified as the Provincial Institute of Agriculture
  </div>
</div>
</template>

<script>
export default {
  name: 'NarvacanCampus'
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
