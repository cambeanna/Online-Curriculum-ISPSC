<template>
  <div class="row1">
    <div class="text-body">
      <strong>
        <span
          style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 30px; color: rgb(179, 102, 8);"
        >
          Welcome to Graduate School!
        </span>
      </strong>
      <hr id="sub-hr" />
      <br />
      <div class="md-content">
        <div class="text-body-2">
          <span
            style="font-size: 26px; font-family: Arial, Helvetica, sans-serif;"
            >DR. JOCELYN ABSOLOR</span
          >
          <div class="text-sub">Dean, Graduate School, Sta. Maria Campus</div>
          <br>
		  <span
            style="font-size: 26px; font-family: Arial, Helvetica, sans-serif;"
            >DR. TESSIE DELA CRUZ</span
          >
          <div class="text-sub">Dean, Graduate School, Tagudin Campus</div>
        </div>
      </div>
	  <hr>
      <div class="course-md">
		<p>Courses Offered:</p>
      </div>
    </div>
	<br>
	<a class="course_1">
		<p>
			<strong>Santa Maria Campus</strong>
		</p>
		<ul>
			<li>
				<router-link to="/">Master of Science in Educaiton</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>General Education</li>
						<li>General Science</li>
						<li>English</li>
						<li>Mathematics</li>
						<li>TLE</li>
					</ul>
				</section>
				</div>
			</li>
			<li>
				<router-link to="/">Master of Arts in Education</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>Educational Management</li>
					</ul>
				</section>
				</div>
			</li>
			<li>
				<router-link to="/">Master of Science in Agriculture</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>Agronomy</li>
						<li>Extension Education</li>
						<li>Animal Science</li>
						<li>Horticulture</li>
						<li>Rural Development</li>
					</ul>
				</section>
				</div>
			</li>
		</ul>
		<br>
		<p>
			<strong>Tagudin Campus</strong>
		</p>
		<ul>
			<li>
				<router-link to="/">Master of Science in Educaiton</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>General Education</li>
						<li>General Science</li>
						<li>English</li>
						<li>Mathematics</li>
						<li>TLE</li>
					</ul>
				</section>
				</div>
			</li>
			<li>
				<router-link to="/">Master of Arts in Education</router-link>
				<div class="major-sub">
				<section>
					<i>Major:</i>
					<ul>
						<li>Educational Management</li>
					</ul>
				</section>
				</div>
			</li>
		</ul>
	</a>
</div>
</template>

<script>
export default {
  name: 'GraduateSchool'
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

.major-sub {
	margin-left: 40px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
