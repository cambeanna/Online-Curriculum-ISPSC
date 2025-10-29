<template>
  <div class="row1">
    <div class="text-body">
      <strong>
        <span
          style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 30px; color: rgb(179, 102, 8);"
        >
          Welcome to Laboratory High School!
        </span>
      </strong>
      <hr id="sub-hr" />
      <br />
      <div class="md-content">
        <div class="text-body-2">
          <span
            style="font-size: 26px; font-family: Arial, Helvetica, sans-serif;"
            >DR. ARLENE P. ABLOG</span
          >
          <div class="text-sub">Principal, Laboratory High School - Sta. Maria Campus</div>
          <br>
		  <span
            style="font-size: 26px; font-family: Arial, Helvetica, sans-serif;"
            >MRS. FEMARIE M. CAPISTRANO</span
          >
          <div class="text-sub">Principal, Laboratory High School - Tagudin Campus</div>
        </div>
      </div>
	  <hr>
      <div class="course-md">
		<p>Curricular Offerings by Campus</p>
      </div>
    </div>
	<br>
	<a class="course_1">
		<p>
			<strong>Senior High School</strong>
		</p>
		<ul>
			<li>
				<router-link to="/">ACADEMIC TRACK</router-link>
				<div class="strands">
				<section>
					<i>Strands:</i>
					<ul>
						<li>General Academic Strands(GAS)</li>
						<li>Humanities and Social Sciences (HUMSS)</li>
						<li>Science, Technology, Engineering and Mathematics (STEM)</li>
						<li>Accocuntancy & Business Management (ABM)</li>
					</ul>
				</section>
				</div>
			</li>
			<li>
				<router-link to="/">TECH-VOC TRACK</router-link>
				<div class="strands">
				<section>
					<i>Strands:</i>
					<ul>
						<li>Home Economics</li>
						<li>Information & Communications Technology</li>
						<li>Industrial Arts</li>
						<li>Agricultural and Fishery Arts</li>
					</ul>
				</section>
				</div>
			</li>
			<li>
				<router-link to="/">SPORTS TRACK</router-link>
			</li>
		</ul>
		<br>
		<br>
		<strong>JUNIOR HIGH SCHOOL</strong>
		<br>
		<strong>SENIOR HIGH SCHOOL</strong>
	</a>
</div>
</template>

<script>
export default {
  name: 'LaboratoryHighSchool'
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

.md-content:before {
	content: " ";
	display: table;
}

.col-sm-10 {
	float: left;
	margin-top: 36px;
}

.course-md {
	color: rgb(0, 0, 0);
	font-family: Georgia, 'Times New Roman', Times, serif;
	margin-top: 50px;
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
	float: right;
	text-align: justify;
}

.strands {
	margin-left: 40px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
