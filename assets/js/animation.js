function customBackground() {
	$("#canvas").css("background", "#00AB39")
}
var option_navigation_mode = "sticky",
	option_animate_content_on_scroll = "on",
	option_parallax_scrolling = "on",
	option_hero_animate_content_on_scroll = "on",
	option_hero_3d_hover_effect = "on",
	option_hero_parallax_hover_effect = "on",
	option_hero_gravity_effect = "on",
	option_hero_background_mode = "space",
	option_hero_background_image_path = [{
		src: "assets/images/1.jpg"
	}],
	option_hero_background_slider_path = [{
		src: "assets/images/1.jpg"
	}, {
		src: "assets/images/2.jpg"
	}, {
		src: "assets/images/3.jpg"
	}],
	option_hero_background_slider_delay = 6e3,
	option_hero_background_slider_transition = "slideDown",
	option_hero_background_slider_transitionDuration = 800,
	option_hero_background_kenburns_path = [{
		src: "assets/images/1.jpg"
	}, {
		src: "assets/images/2.jpg"
	}, {
		src: "assets/images/3.jpg"
	}],
	option_hero_background_kenburns_delay = 6e3,
	option_hero_background_kenburns_transition = "slideDown",
	option_hero_background_kenburns_transitionDuration = 800,
	option_hero_background_youtube_url = "https://www.youtube.com/watch?v=kB5xkGZmf_Q",
	option_hero_background_youtube_startPoint = 0,
	option_hero_background_youtube_endPoint = 90,
	option_hero_background_youtube_mute = "off",
	option_hero_background_color_custom = "off",
	option_hero_background_color_custom_color = "#4600FF",
	option_hero_background_gradient_colorArray = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]),
	option_hero_background_gradient_stransitionSpeed = 8,
	option_hero_background_sphere_distance = 300,
	option_hero_background_sphere_rotation_speed = .2,
	option_hero_background_waves_distance = 1500,
	option_hero_background_waves_dotSpacing = 120,
	option_hero_background_waves_dotAmountX = 20,
	option_hero_background_waves_dotAmountY = 60,
	option_hero_background_mesh_color = "#fff",
	option_hero_background_mesh_spotlight_size = 600,
	option_hero_background_space_star_amount = 512,
	option_hero_background_space_star_speed = 2.5;
jQuery(window).load(function() {
		"use strict";
		$("#page-loader").addClass("hide-this"), $("#cycle").cycle("prev"), setTimeout(function() {
			$(".hero .background-content.page-enter-animated").addClass("show"), setTimeout(function() {
				sliderRevolution()
			}, 200), setTimeout(function() {
				$(".hero .front-content.page-enter-animated").addClass("show")
			}, 540)
		}, 1e3)
	}), jQuery(document).ready(function() {
		"use strict";

		function o() {
			setTimeout(function() {
				var o = $(window).height(),
					e = $(".popup .container-intro").outerHeight(),
					i = (o - e) / 2;
				$(".popup").addClass("active"), o >= e && $(".popup.active").css("margin-top", i).css("margin-bottom", i / 61.8 * 38.2)
			}, 300)
		}
		$(".navigation-main .navigation-items").onePageNav({
			currentClass: "current",
			changeHash: !1,
			scrollSpeed: 750,
			scrollThreshold: .5,
			filter: ":not(.external)",
			easing: "swing"
		}), $(document).scroll(function() {
			$(this).scrollTop() > 1 ? $("body").addClass("top-leave") : $("body").removeClass("top-leave")
		}), $(".scroll-top").on("click", function() {
			var o = !1,
				e = $(this);
			e.addClass("active"), $("html, body").animate({
				scrollTop: "0"
			}, {
				complete: function() {
					o || (o = !0, e.removeClass("active"))
				}
			})
		}), "on" == option_animate_content_on_scroll && (window.sr = ScrollReveal(), sr.reveal(".scroll-animated-from-bottom", {
			duration: 500,
			delay: 0,
			origin: "bottom",
			rotate: {
				x: 0,
				y: 0,
				z: 0
			},
			opacity: 0,
			distance: "80px",
			viewFactor: .3,
			scale: 1
		})), "sticky" == option_navigation_mode && ($(".navigation-main").addClass("sticky-navigation"), $(".navigation-main.sticky-navigation").sticky({
			topSpacing: 0
		})), "popup" == option_navigation_mode && ($(".navigation-main").addClass("popup-navigation"), $(document).scroll(function() {
			$(this).scrollTop() > $(window).height() ? $(".navigation-main.popup-navigation").addClass("show") : $(".navigation-main.popup-navigation").removeClass("show")
		})), "off" == option_parallax_scrolling && dzsprx_init(".dzsparallaxer", {
			mode_scroll: "spt"
		}), $(".default-slider-1").cubeportfolio({
			layoutMode: "slider",
			drag: !0,
			auto: !1,
			autoPauseOnHover: !0,
			showNavigation: !1,
			showPagination: !0,
			rewindNav: !1,
			scrollByPage: !1,
			singlePageDelegate: null,
			gridAdjustment: "responsive",
			mediaQueries: [{
				width: 1500,
				cols: 1
			}],
			gapHorizontal: 0,
			gapVertical: 0,
			caption: "opacity",
			displayType: "fadeIn",
			displayTypeSpeed: 500
		}), $(".default-carousel-1").cubeportfolio({
			layoutMode: "slider",
			drag: !0,
			auto: !0,
			showNavigation: !1,
			showPagination: !0,
			rewindNav: !1,
			scrollByPage: !1,
			gridAdjustment: "responsive",
			mediaQueries: [{
				width: 900,
				cols: 3
			}, {
				width: 600,
				cols: 2
			}],
			gapHorizontal: 0,
			gapVertical: 40,
			caption: "opacity",
			displayType: "fadeIn",
			displayTypeSpeed: 100,
			lightboxDelegate: ".cbp-lightbox",
			lightboxGallery: !1,
			lightboxTitleSrc: "data-title",
			singlePageDelegate: ".cbp-singlePage",
			singlePageDeeplinking: !1,
			singlePageAnimation: "fade",
			singlePageStickyNavigation: !0,
			singlePageCallback: function(o, e) {
				var i = this;
				$.ajax({
					url: o,
					type: "GET",
					dataType: "html",
					timeout: 1e4
				}).done(function(o) {
					i.updateSinglePage(o)
				}).fail(function() {
					i.updateSinglePage("AJAX Error! Please refresh the page!")
				})
			}
		}), $(".phantom-wrapper-popups").cubeportfolio({
			lightboxDelegate: ".cbp-lightbox",
			lightboxGallery: !1,
			lightboxTitleSrc: "data-title",
			singlePageDelegate: ".cbp-singlePage",
			singlePageDeeplinking: !1,
			singlePageAnimation: "fade",
			singlePageStickyNavigation: !1,
			singlePageCallback: function(o, e) {
				var i = this;
				$.ajax({
					url: o,
					type: "GET",
					dataType: "html",
					timeout: 1e4
				}).done(function(o) {
					i.updateSinglePage(o)
				}).fail(function() {
					i.updateSinglePage("AJAX Error! Please refresh the page!")
				})
			}
		}), $(".cbp").on("updateSinglePageComplete.cbp", function() {
			var e = $(".popup").find("img, iframe"),
				i = e.length,
				a = 0;
			e.on("load", function() {
				a++, a === i && ($(window).on("resize", function() {
					o()
				}), o(), setTimeout(function() {
					$(".popup-close-button").addClass("active")
				}, 300))
			}), $(".popup").find(".intro-video").length && ($(window).on("resize", function() {
				o()
			}), o(), setTimeout(function() {
				$(".popup-close-button").addClass("active")
			}, 300))
		}), $(".cbp").on("initComplete.cbp", function() {
			$(document).off("keydown.cbp")
		}), $("body").on("click", ".popup .button-description", function() {
			$(".popup .button-description").hasClass("active") ? ($(".popup .container-info").removeClass("active"), $(".popup .button-description").removeClass("active"), $(".popup .allow-push-by-menu").removeClass("active")) : ($(".popup .button-description").addClass("active"), $(".popup .container-info").addClass("active"), $(".popup .allow-push-by-menu").addClass("active"))
		}), $("body").on("mousedown", ".container-intro", function() {
			$(".popup .button-description").hasClass("active") && ($(".popup .container-info").removeClass("active"), $(".popup .button-description").removeClass("active"), $(".popup .allow-push-by-menu").removeClass("active"))
		}), $(document).on("click", "a.cbp-lightbox", function() {
			setTimeout(function() {
				$(".cbp-popup-lightbox .cbp-popup-content").append('<div id="popup-close-button-1" class="popup-close-button" data-action="close"><span class="ti-back-left" data-action="close"></span></div>'), setTimeout(function() {
					$(".cbp-popup-lightbox-img").attr("data-action", ""), $(".cbp-popup-lightbox").attr("data-action", ""), $(".popup-close-button").addClass("active"), $(".cbp-popup-lightbox video").length && $(".cbp-popup-lightbox video")[0].play()
				}, 500)
			}, 100), $(".cbp-popup-lightbox video").removeAttr("controls")
		})
	}),
	function(o) {
		(jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|android|ipad|playbook|silk|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(o) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0, 4))
	}(navigator.userAgent || navigator.vendor || window.opera);

function sliderRevolution() {
	"use strict";
	$(".hero").hasClass("slider-revolution") && jQuery("#slider1").revolution({
		sliderType: "standard",
		sliderLayout: "fullscreen",
		spinner: "off",
		parallax: {
			type: "scroll+mouse",
			levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
			origo: "enterpoint",
			speed: 100,
			bgparallax: "on",
			disable_onmobile: "off"
		},
		navigation: {
			mouseScrollNavigation: "off",
			onHoverStop: "off",
			arrows: {
				enable: !1
			},
			touch: {
				touchenabled: "on",
				swipe_treshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: !1,
				swipe_direction: "horizontal"
			},
			bullets: {
				enable: !0,
				hide_onmobile: !1,
				style: "uranus",
				hide_onleave: !1,
				direction: "vertical",
				h_align: "right",
				v_align: "center",
				h_offset: 30,
				v_offset: 0,
				space: 12,
				tmp: '<span class="tp-bullet-inner"></span>'
			}
		}
	})
}
jQuery(document).ready(function() {
	"use strict";

	function t() {
		$(".bg-image").vegas({
			slides: option_hero_background_image_path,
			delay: 6e3,
			transitionDuration: 800,
			timer: !1
		})
	}

	function e() {
		$(".bg-image").vegas({
			slides: option_hero_background_slider_path,
			transition: option_hero_background_slider_transition,
			delay: option_hero_background_slider_delay,
			transitionDuration: option_hero_background_slider_transitionDuration,
			timer: !1,
			walk: function(t, e) {
				$("#cycle").cycle("next")
			}
		})
	}

	function o() {
		$(".bg-image").vegas({
			slides: option_hero_background_kenburns_path,
			transition: option_hero_background_kenburns_transition,
			delay: option_hero_background_kenburns_delay,
			transitionDuration: option_hero_background_kenburns_transitionDuration,
			timer: !1,
			animation: "kenburns",
			walk: function(t, e) {
				$("#cycle").cycle("next")
			}
		})
	}

	function i() {
		"on" === option_hero_background_youtube_mute && (option_hero_background_youtube_mute = !0, $(".volume-button").removeClass("fa-volume-up").addClass("fa-volume-off")), "off" === option_hero_background_youtube_mute && (option_hero_background_youtube_mute = !1), $(".hero .bg-video").append('<div id="bg-youtube" class="player showOn-video-bg"></div>'), $(".hero #bg-youtube").attr("data-property", '{videoURL:option_hero_background_youtube_url,containment:".bg-video",autoPlay:true,mute:option_hero_background_youtube_mute,startAt: option_hero_background_youtube_startPoint,stopAt: option_hero_background_youtube_endPoint,opacity:1,stopMovieOnBlur:false,showControls:false}'), $(".player").mb_YTPlayer(), $(".hero .controls").addClass("show"), $(".volume-button").click(function() {
			$("#bg-youtube").hasClass("isMuted") ? ($("#bg-youtube").YTPUnmute(), $(".volume-button").removeClass("fa-volume-off").addClass("fa-volume-up")) : ($("#bg-youtube").YTPMute(), $(".volume-button").removeClass("fa-volume-up").addClass("fa-volume-off"))
		});
		var t = !0;
		$("#bg-youtube").on("YTPPause", function() {
			t = !1
		}), $("#bg-youtube").on("YTPPlay", function() {
			t = !0
		}), $(".pause-button").click(function() {
			1 == t ? ($("#bg-youtube").YTPPause(), $(".pause-button").removeClass("ti-control-pause").addClass("ti-control-play")) : ($("#bg-youtube").YTPPlay(), $(".pause-button").removeClass("ti-control-play").addClass("ti-control-pause"))
		})
	}

	function n() {
		"on" == option_hero_background_color_custom && ($(".hero .level-2").css("background", option_hero_background_color_custom_color), $(".hero .level-2").children().remove()), "color" == option_hero_background_mode && $(".hero .bg-color").css("opacity", "1"), $(".hero .bg-pattern").remove(), $(".hero .bg-overlay").remove()
	}

	function s() {
		function t() {
			var t = e[n[0]],
				a = e[n[1]],
				r = e[n[2]],
				h = e[n[3]],
				c = 1 - o,
				l = Math.round(c * t[0] + o * a[0]),
				u = Math.round(c * t[1] + o * a[1]),
				d = Math.round(c * t[2] + o * a[2]),
				_ = "rgb(" + l + "," + u + "," + d + ")",
				p = Math.round(c * r[0] + o * h[0]),
				f = Math.round(c * r[1] + o * h[1]),
				m = Math.round(c * r[2] + o * h[2]),
				g = "rgb(" + p + "," + f + "," + m + ")";
			i.css({
				background: "-webkit-gradient(linear, left top, right top, from(" + _ + "), to(" + g + "))"
			}).css({
				background: "-moz-linear-gradient(left, " + _ + " 0%, " + g + " 100%)"
			}), o += s, o >= 1 && (o %= 1, n[0] = n[1], n[2] = n[3], n[1] = (n[1] + Math.floor(1 + Math.random() * (e.length - 1))) % e.length, n[3] = (n[3] + Math.floor(1 + Math.random() * (e.length - 1))) % e.length)
		}
		var e = option_hero_background_gradient_colorArray,
			o = 0,
			i = $(".bg-color"),
			n = [0, 1, 2, 3],
			s = option_hero_background_gradient_stransitionSpeed / 1e4;
		setInterval(t, 1), "gradient" == option_hero_background_mode && $(".hero .bg-color").css("opacity", "1"), $(".hero .bg-pattern").remove(), $(".hero .bg-overlay").remove()
	}

	function a() {
		function t() {
			var t, i;
			t = document.createElement("div"), document.getElementById("canvas").appendChild(t), s = new THREE.PerspectiveCamera(75, h / c, 1, 1e4), s.position.z = option_hero_background_sphere_distance, a = new THREE.Scene, r = new THREE.CanvasRenderer, r.setPixelRatio(window.devicePixelRatio), r.setSize(h, c), t.appendChild(r.domElement), r.setClearColor(1118481);
			for (var n = 2 * Math.PI, l = new THREE.SpriteCanvasMaterial({
					color: 16777215,
					program: function(t) {
						t.beginPath(), t.arc(0, 0, .5, 0, n, !0), t.fill()
					}
				}), u = 0; 1e3 > u; u++) i = new THREE.Sprite(l), i.position.x = 2 * Math.random() - 1, i.position.y = 2 * Math.random() - 1, i.position.z = 2 * Math.random() - 1, i.position.normalize(), i.position.multiplyScalar(10 * Math.random() + 450), i.scale.multiplyScalar(2), a.add(i);
			for (var u = 0; 300 > u; u++) {
				var d = new THREE.Geometry,
					_ = new THREE.Vector3(2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1);
				_.normalize(), _.multiplyScalar(450), d.vertices.push(_);
				var p = _.clone();
				p.multiplyScalar(.3 * Math.random() + 1), d.vertices.push(p);
				var f = new THREE.Line(d, new THREE.LineBasicMaterial({
					color: 16777215,
					opacity: Math.random()
				}));
				a.add(f)
			}
			document.addEventListener("mousemove", o, !1), window.addEventListener("resize", e, !1)
		}

		function e() {
			var t = $(".hero .level-1").width(),
				e = $(".hero .level-1").height();
			d = t / 2, _ = e / 2, s.aspect = t / e, s.updateProjectionMatrix(), r.setSize(t, e)
		}

		function o(t) {
			l = t.clientX - d, u = t.clientY - _
		}

		function i() {
			requestAnimationFrame(i), n()
		}

		function n() {
			p && (s.position.x += .05 * (l - s.position.x), s.position.y += .05 * (-u + 200 - s.position.y), s.lookAt(a.position), a.rotation.y += option_hero_background_sphere_rotation_speed / 100, r.render(a, s))
		}
		$(".hero .background-content .bg-overlay").css("z-index", "2");
		var s, a, r, h = $(".hero .level-1").width(),
			c = $(".hero .level-1").height(),
			l = 0,
			u = 0,
			d = window.innerWidth / 2,
			_ = window.innerHeight / 2;
		t(), i();
		var p = !0;
		$(document).scroll(function() {
			p = $(this).scrollTop() > $(window).height() ? !1 : !0
		})
	}

	function r() {
		function t() {
			s = document.createElement("div"), document.getElementById("canvas").appendChild(s), a = new THREE.PerspectiveCamera(75, p / f, 1, 1e4), a.position.z = option_hero_background_waves_distance, r = new THREE.Scene, c = new Array;
			for (var t = 2 * Math.PI, i = new THREE.SpriteCanvasMaterial({
					color: 16777215,
					program: function(e) {
						e.beginPath(), e.arc(0, 0, .5, 0, t, !0), e.fill()
					}
				}), n = 0, m = 0; d > m; m++)
				for (var g = 0; _ > g; g++) l = c[n++] = new THREE.Sprite(i), l.position.x = m * u - d * u / 2, l.position.z = g * u - _ * u / 2, r.add(l);
			h = new THREE.CanvasRenderer, h.setPixelRatio(window.devicePixelRatio), h.setSize(p, f), s.appendChild(h.domElement), h.setClearColor(1118481), document.addEventListener("mousemove", o, !1), window.addEventListener("resize", e, !1)
		}

		function e() {
			var t = $(".hero .level-1").width(),
				e = $(".hero .level-1").height();
			y = t / 2, b = e / 2, a.aspect = t / e, a.updateProjectionMatrix(), h.setSize(t, e)
		}

		function o(t) {
			g = t.clientX - y, v = t.clientY - b
		}

		function i() {
			requestAnimationFrame(i), n()
		}

		function n() {
			if (w) {
				a.position.x += .05 * (g - a.position.x), a.position.y += .05 * (-v - a.position.y), a.lookAt(r.position);
				for (var t = 0, e = 0; d > e; e++)
					for (var o = 0; _ > o; o++) l = c[t++], l.position.y = 50 * Math.sin(.3 * (e + m)) + 50 * Math.sin(.5 * (o + m)), l.scale.x = l.scale.y = 4 * (Math.sin(.3 * (e + m)) + 1) + 4 * (Math.sin(.5 * (o + m)) + 1);
				h.render(r, a), m += .1
			}
		}
		$(".hero .background-content .bg-overlay").css("z-index", "2");
		var s, a, r, h, c, l, u = option_hero_background_waves_dotSpacing,
			d = option_hero_background_waves_dotAmountX,
			_ = option_hero_background_waves_dotAmountY,
			p = $(".hero .level-1").width(),
			f = $(".hero .level-1").height(),
			m = 0,
			g = 0,
			v = 0,
			y = p / 2,
			b = f / 2;
		t(), i();
		var w = !0;
		$(document).scroll(function() {
			w = $(this).scrollTop() > $(window).height() ? !1 : !0
		})
	}

	function h() {
		function t(t) {
			this.x = t.x, this.y = t.y, this.xBase = this.x, this.yBase = this.y, this.offset = e(0, 1e3), this.duration = e(20, 60), this.range = e(5, 5), this.dir = e(0, 1) > .5 ? 1 : -1, this.rad = e(2, 4)
		}

		function e(t, e) {
			return Math.random() * (e - t) + t
		}

		function o(t, e) {
			var o = t.x - e.x,
				i = t.y - e.y;
			return Math.atan2(i, o)
		}

		function i() {
			l = document.createElement("canvas"), u = l.getContext("2d"), y = {
				x: 0,
				y: 0
			}, k = [], p = 180, f = .25 * p, document.getElementById("canvas").appendChild(l), n(), h()
		}

		function n() {
			d = $(".hero .level-1").width(), _ = $(".hero .level-1").height(), l.width = d, l.height = _, y.x = d / 2, y.y = _ / 2, b = !1, w = 0, x = 0, k.length = 0, M = 0, s(), u.strokeStyle = option_hero_background_mesh_color, u.lineWidth = 2
		}

		function s() {
			for (var o = -p / 2; d + p > o; o += p) {
				w++;
				for (var i = -p / 2; _ + p > i; i += p) o == -p / 2 && x++, k.push(new t({
					x: ~~(o + e(-f, f)),
					y: ~~(i + e(-f, f))
				}))
			}
		}

		function a() {
			b || (y.x = d / 2 + 90 * Math.cos(M / 40), y.y = _ / 2 + 90 * Math.sin(M / 40)), k.forEach(function(t) {
				t.step()
			}), M++
		}

		function r() {
			u.clearRect(0, 0, d, _), u.beginPath();
			for (var t = 0; w > t; t++)
				for (var e = 0; x > e; e++) m = k[t * x + e], g = t === w - 1 ? null : k[(t + 1) * x + e], v = e === x - 1 ? null : k[t * x + e + 1], g && (u.moveTo(m.x, m.y), u.lineTo(g.x, g.y)), v && (u.moveTo(m.x, m.y), u.lineTo(v.x, v.y));
			u.stroke(), u.fillStyle = "#000", k.forEach(function(t) {
				u.save(), u.beginPath(), u.translate(t.x, t.y), u.rotate(Math.PI / 4), u.rect(0, 0, 0, 0), u.fill(), u.stroke(), u.restore()
			});
			var o = u.createRadialGradient(y.x, y.y, 0, y.x, y.y, option_hero_background_mesh_spotlight_size);
			o.addColorStop(0, "hsla(0, 0%, 0%, 0)"), o.addColorStop(1, "hsla(0, 0%, 0%, 0.93)"), u.fillStyle = o, u.fillRect(0, 0, d, _)
		}

		function h() {
			requestAnimationFrame(h), a(), r()
		}

		function c(t) {
			b = !0, y.x = t.pageX, y.y = t.pageY
		}
		var l, u, d, _, p, f, m, g, v, y, b, w, x, k, M;
		t.prototype.step = function() {
			this.x = this.xBase + this.dir * Math.sin((M + this.offset) / this.duration) * this.range, this.y = this.yBase + this.dir * Math.cos((M + this.offset) / this.duration) * this.range;
			var t = o(this, y);
			this.x = this.x + 100 * Math.cos(t), this.y = this.y + 100 * Math.sin(t)
		}, window.addEventListener("resize", n), window.addEventListener("mousemove", c), i()
	}

	function c() {
		! function(t, e, o, i) {
			var n, s, a, r = function(e, o) {
					this.el = e, this.$el = t(e), this.options = o, a = this
				},
				h = !1,
				c = !1;
			! function() {
				for (var t = 0, o = ["ms", "moz", "webkit", "o"], i = 0; i < o.length && !e.requestAnimationFrame; ++i) e.requestAnimationFrame = e[o[i] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[o[i] + "CancelAnimationFrame"] || e[o[i] + "CancelRequestAnimationFrame"];
				e.requestAnimationFrame || (e.requestAnimationFrame = function(o, i) {
					var n = (new Date).getTime(),
						s = Math.max(0, 16 - (n - t)),
						a = e.setTimeout(function() {
							o(n + s)
						}, s);
					return t = n + s, a
				}), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) {
					clearTimeout(t)
				})
			}(), r.prototype = {
				defaults: {
					starColor: "rgba(255,255,255,1)",
					bgColor: "rgba(0,0,0,1)",
					mouseMove: !0,
					mouseColor: "rgba(0,0,0,0.2)",
					mouseSpeed: 15,
					speed: option_hero_background_space_star_speed,
					quantity: option_hero_background_space_star_amount,
					ratio: option_hero_background_space_star_amount / 2,
					divclass: "starfield"
				},
				resizer: function() {
					var t = this.star,
						e = this.context.canvas.width,
						o = this.context.canvas.height;
					this.w = this.$el.width(), this.h = this.$el.height(), this.x = Math.round(this.w / 2), this.y = Math.round(this.h / 2);
					var i = this.w / e,
						n = this.h / o;
					this.context.canvas.width = this.w, this.context.canvas.height = this.h;
					for (var s = 0; s < this.n; s++) this.star[s][0] = t[s][0] * i, this.star[s][1] = t[s][1] * n, this.star[s][3] = this.x + this.star[s][0] / this.star[s][2] * this.star_ratio, this.star[s][4] = this.y + this.star[s][1] / this.star[s][2] * this.star_ratio;
					a.context.fillStyle = a.settings.bgColor, this.context.strokeStyle = this.settings.starColor
				},
				init: function() {
					this.settings = t.extend({}, this.defaults, this.options);
					var n = o.location.href;
					this.n = parseInt(-1 != n.indexOf("n=") ? n.substring(n.indexOf("n=") + 2, -1 != n.substring(n.indexOf("n=") + 2, n.length).indexOf("&") ? n.indexOf("n=") + 2 + n.substring(n.indexOf("n=") + 2, n.length).indexOf("&") : n.length) : this.settings.quantity), this.flag = !0, this.test = !0, this.w = 0, this.h = 0, this.x = 0, this.y = 0, this.z = 0, this.star_color_ratio = 0, this.star_x_save = 0, this.star_y_save = 0, this.star_ratio = this.settings.ratio, this.star_speed = this.settings.speed, this.star_speed_save = 0, this.star = new Array(this.n), this.color = this.settings.starColor, this.opacity = .1, this.cursor_x = 0, this.cursor_y = 0, this.mouse_x = 0, this.mouse_y = 0, this.canvas_x = 0, this.canvas_y = 0, this.canvas_w = 0, this.canvas_h = 0, this.fps = this.settings.fps, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/), this.orientationSupport = e.DeviceOrientationEvent !== i, this.portrait = null;
					var s = function() {
						a.w = a.$el.width(), a.h = a.$el.height(), a.initW = a.w, a.initH = a.h, a.portrait = a.w < a.h, a.wrapper = t("<canvas />").addClass(a.settings.divclass), a.wrapper.appendTo(a.el), a.starz = t("canvas", a.el), a.starz[0].getContext && (a.context = a.starz[0].getContext("2d"), c = !0), a.context.canvas.width = a.w, a.context.canvas.height = a.h
					};
					s();
					var r = function() {
						if (c) {
							a.x = Math.round(a.w / 2), a.y = Math.round(a.h / 2), a.z = (a.w + a.h) / 2, a.star_color_ratio = 1 / a.z, a.cursor_x = a.x, a.cursor_y = a.y;
							for (var t = 0; t < a.n; t++) a.star[t] = new Array(5), a.star[t][0] = Math.random() * a.w * 2 - 2 * a.x, a.star[t][1] = Math.random() * a.h * 2 - 2 * a.y, a.star[t][2] = Math.round(Math.random() * a.z), a.star[t][3] = 0, a.star[t][4] = 0;
							a.context.fillStyle = a.settings.bgColor, a.context.strokeStyle = a.settings.starColor
						}
					};
					r(), h = !0
				},
				anim: function() {
					this.mouse_x = this.cursor_x - this.x, this.mouse_y = this.cursor_y - this.y, this.context.fillRect(0, 0, this.w, this.h);
					for (var t = 0; t < this.n; t++) this.test = !0, this.star_x_save = this.star[t][3], this.star_y_save = this.star[t][4], this.star[t][0] += this.mouse_x >> 4, this.star[t][0] > this.x << 1 && (this.star[t][0] -= this.w << 1, this.test = !1), this.star[t][0] < -this.x << 1 && (this.star[t][0] += this.w << 1, this.test = !1), this.star[t][1] += this.mouse_y >> 4, this.star[t][1] > this.y << 1 && (this.star[t][1] -= this.h << 1, this.test = !1), this.star[t][1] < -this.y << 1 && (this.star[t][1] += this.h << 1, this.test = !1), this.star[t][2] -= this.star_speed, this.star[t][2] > this.z && (this.star[t][2] -= this.z, this.test = !1), this.star[t][2] < 0 && (this.star[t][2] += this.z, this.test = !1), this.star[t][3] = this.x + this.star[t][0] / this.star[t][2] * this.star_ratio, this.star[t][4] = this.y + this.star[t][1] / this.star[t][2] * this.star_ratio, this.star_x_save > 0 && this.star_x_save < this.w && this.star_y_save > 0 && this.star_y_save < this.h && this.test && (this.context.lineWidth = 2 * (1 - this.star_color_ratio * this.star[t][2]), this.context.beginPath(), this.context.moveTo(this.star_x_save, this.star_y_save), this.context.lineTo(this.star[t][3], this.star[t][4]), this.context.stroke(), this.context.closePath())
				},
				loop: function() {
					this.anim(), s = e.requestAnimationFrame(function() {
						a.loop()
					})
				},
				move: function() {
					function t(t) {
						if (null !== t.beta && null !== t.gamma) {
							var e = t.gamma,
								o = t.beta;
							a.portrait || (e = -1 * t.beta, o = t.gamma), a.cursor_x = a.w / 2 + 5 * e, a.cursor_y = a.h / 2 + 5 * o
						}
					}

					function i(t) {
						a.cursor_x = t.pageX || t.clientX + n.scrollLeft - n.clientLeft, a.cursor_y = t.pageY || t.clientY + n.scrollTop - n.clientTop
					}
					var n = o.documentElement;
					this.orientationSupport && !this.desktop ? e.addEventListener("deviceorientation", t, !1) : e.addEventListener("mousemove", i, !1)
				},
				stop: function() {
					e.cancelAnimationFrame(s), n = !1
				},
				start: function() {
					return h || (h = !0, this.init()), n || (n = !0, this.loop()), e.addEventListener("resize", function() {
						a.resizer()
					}, !1), e.addEventListener("orientationchange", function() {
						a.resizer()
					}, !1), this.settings.mouseMove && this.move(), this
				}
			}, r.defaults = r.prototype.defaults, t.fn.starfield = function(t) {
				return this.each(function() {
					new r(this, t).start()
				})
			}, e.Starfield = r
		}(jQuery, window, document), $("#canvas").starfield()
	}

	function l() {
		"on" === option_hero_gravity_effect && u()
	}

	function u() {
		! function(t, e) {
			function o(o, i) {
				function n() {
					this.x = Math.random() * o.width, this.y = Math.random() * o.height, this.vx = _.velocity - .5 * Math.random(), this.vy = _.velocity - .5 * Math.random(), this.radius = Math.random() * _.star.width
				}
				var s = 14e3,
					a = .2,
					r = t(".hero .level-1").width(),
					h = t(".hero .level-1").height(),
					c = Math.round(h * r / s),
					l = t(o),
					u = o.getContext("2d"),
					d = {
						star: {
							color: "rgba(255, 255, 255, .65)",
							width: 1
						},
						line: {
							color: "rgba(255, 255, 255, .65)",
							width: .2
						},
						position: {
							x: 0,
							y: 0
						},
						width: r,
						height: h,
						velocity: a,
						length: c,
						distance: 120,
						radius: 200,
						stars: []
					},
					_ = t.extend(!0, {}, d, i);
				n.prototype = {
					create: function() {
						u.beginPath(), u.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), u.fill()
					},
					animate: function() {
						var t;
						for (t = 0; t < _.length; t++) {
							var e = _.stars[t];
							e.y < 0 || e.y > o.height ? (e.vx = e.vx, e.vy = -e.vy) : (e.x < 0 || e.x > o.width) && (e.vx = -e.vx, e.vy = e.vy), e.x += e.vx, e.y += e.vy
						}
					},
					line: function() {
						var t, e, o, i, n = _.length;
						for (o = 0; n > o; o++)
							for (i = 0; n > i; i++) t = _.stars[o], e = _.stars[i], t.x - e.x < _.distance && t.y - e.y < _.distance && t.x - e.x > -_.distance && t.y - e.y > -_.distance && t.x - _.position.x < _.radius && t.y - _.position.y < _.radius && t.x - _.position.x > -_.radius && t.y - _.position.y > -_.radius && (u.beginPath(), u.moveTo(t.x, t.y), u.lineTo(e.x, e.y), u.stroke(), u.closePath())
					}
				}, this.createStars = function() {
					var t, e, i = _.length;
					for (u.clearRect(0, 0, o.width, o.height), e = 0; i > e; e++) _.stars.push(new n), t = _.stars[e], t.create();
					t.line(), t.animate()
				}, this.setCanvas = function() {
					o.width = _.width, o.height = _.height
				}, this.setContext = function() {
					u.fillStyle = _.star.color, u.strokeStyle = _.line.color, u.lineWidth = _.line.width
				}, this.setInitialPosition = function() {
					i && i.hasOwnProperty("position") || (_.position = {
						x: .5 * o.width,
						y: .5 * o.height
					})
				}, this.loop = function(t) {
					t(), e.requestAnimationFrame(function() {
						this.loop(t)
					}.bind(this))
				}, this.bind = function() {
					t(e).on("mousemove", function(t) {
						_.position.x = t.pageX - l.offset().left, _.position.y = t.pageY - l.offset().top
					})
				}, this.init = function() {
					this.setCanvas(), this.setContext(), this.setInitialPosition(), this.loop(this.createStars), this.bind()
				}
			}
			t.fn.constellation = function(t) {
				return this.each(function() {
					var e = new o(this, t);
					e.init()
				})
			}
		}($, window), $("canvas").constellation({}), window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
			return window.setTimeout(t, 1e3 / 60)
		});
		var t = function() {
			var t = {};
			return function(e, o, i) {
				i || (i = "Don't call this twice without a uniqueId"), t[i] && clearTimeout(t[i]), t[i] = setTimeout(e, o)
			}
		}();
		$(window).resize(function() {
			t(function() {
				$("canvas").constellation({})
			}, 600, "some unique string")
		})
	}
	if ("on" == option_hero_animate_content_on_scroll) {
		var d = $(window).height();
		$(window).scroll(function() {
			var t = $(window).scrollTop(),
				e = 1 - t / d * 2.8;
			d > t && ($(".front-content").css("margin-top", t), $(".front-content").css("opacity", e))
		})
	}
	var _ = 800,
		p = 6e3;
	if ("slider" === option_hero_background_mode && (_ = option_hero_background_slider_transitionDuration, p = option_hero_background_slider_delay), "kenburns" === option_hero_background_mode && (_ = option_hero_background_kenburns_transitionDuration, p = option_hero_background_kenburns_delay), $("#cycle").cycle({
			fx: "scrollVert",
			timeout: p,
			delay: 0,
			speed: _,
			slides: ".slide",
			pager: ".cycle-pagination",
			log: !1
		}), !$("#hero").hasClass("slider-revolution")) switch (option_hero_background_mode) {
		case "image":
			t(), l();
			break;
		case "slider":
			e(), l();
			break;
		case "kenburns":
			o(), l();
			break;
		case "youtube":
			jQuery.browser.mobile ? t() : i(), l();
			break;
		case "color":
			n(), l();
			break;
		case "gradient":
			s(), l();
			break;
		case "sphere":
			jQuery.getScript("/assets/js/plugins/three.min.js", function(t, e, o) {
				jQuery.getScript("/assets/js/plugins/CanvasRenderer.js", function(t, e, o) {
					jQuery.getScript("/assets/js/plugins/Projector.js", function(t, e, o) {
						a()
					})
				})
			});
			break;
		case "waves":
			jQuery.getScript("/assets/js/plugins/three.min.js", function(t, e, o) {
				jQuery.getScript("/assets/js/plugins/CanvasRenderer.js", function(t, e, o) {
					jQuery.getScript("/assets/js/plugins/Projector.js", function(t, e, o) {
						r()
					})
				})
			});
			break;
		case "mesh":
			h();
			break;
		case "space":
			c();
			break;
		case "custom":
			customBackground(), l();
			break;
		default:
			alert("Background Error !!!"), console.log("Background Error !!!")
	}
	if ("on" == option_hero_3d_hover_effect) {
		var f = $(".3d-hover"),
			m = 8;
		$(".hero").on("mousemove", function(t) {
			var e = $(window).innerWidth(),
				o = $(window).innerHeight(),
				i = e / m,
				n = -(e / 2 - t.pageX) / i,
				s = -(o / 2 - t.pageY) / i * 0;
			f.attr("style", "transform: rotateY(" + n + "deg) rotateX(" + s + "deg);-webkit-transform: rotateY(" + n + "deg) rotateX(" + s + "deg);-moz-transform: rotateY(" + n + "deg) rotateX(" + s + "deg)")
		})
	}
	if ("on" == option_hero_parallax_hover_effect) {
		var g = $(".hero").parallax({
			scalarX: 24,
			scalarY: 0,
			frictionX: .18,
			frictionY: .18
		});
		$(".hero").hover(function() {
			g.parallax("enable")
		}, function() {
			g.parallax("disable")
		})
	}
});
$(document).ready(function() {
	"use strict";

	function e() {
		var e = !1;
		$(".slider-process .cbp-wrapper").mousedown(function() {
			$(".slider-process .cbp-wrapper .process-info-box").removeClass("active"), e = !0
		}), $(document).mouseup(function() {
			e && setTimeout(function() {
				$(".slider-process .cbp-wrapper .process-info-box").addClass("active"), e = !1
			}, 500)
		})
	}

	function t() {
		function e() {
			google.maps.event.trigger(r, "resize"), r.setCenter(c.getPosition())
		}
		var t = {
				zoom: s,
				center: a,
				disableDefaultUI: !0,
				styles: [{
					featureType: "All",
					elementType: "geometry.stroke",
					stylers: [{
						visibility: "simplified"
					}]
				}, {
					featureType: "landscape.man_made",
					elementType: "geometry.fill",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "landscape.natural",
					elementType: "All",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "poi",
					elementType: "All",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "transit.line",
					elementType: "All",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "landscape",
					elementType: "All",
					stylers: [{
						visibility: "on"
					}]
				}, {
					featureType: "road.highway",
					elementType: "All",
					stylers: [{
						visibility: "on"
					}, {
						weight: 1.8
					}, {
						saturation: -100
					}, {
						lightness: -42
					}, {
						gamma: 2
					}]
				}, {
					featureType: "landscape.man_made",
					elementType: "labels",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "All",
					elementType: "geometry",
					stylers: [{
						saturation: -20
					}, {
						visibility: "simplified"
					}]
				}, {
					featureType: "water",
					elementType: "All",
					stylers: [{
						lightness: -70
					}, {
						saturation: -84
					}]
				}, {
					featureType: "landscape",
					elementType: "All",
					stylers: [{
						gamma: .96
					}, {
						saturation: -100
					}, {
						lightness: -72
					}]
				}, {
					featureType: "road.local",
					elementType: "All",
					stylers: [{
						lightness: -78
					}, {
						gamma: 2.14
					}]
				}, {
					featureType: "road.arterial",
					elementType: "All",
					stylers: [{
						lightness: -74
					}, {
						gamma: 2.13
					}]
				}, {
					featureType: "All",
					elementType: "labels.text.stroke",
					stylers: [{
						gamma: .4
					}]
				}, {
					featureType: "All",
					elementType: "labels.text.stroke",
					stylers: [{
						gamma: .32
					}, {
						visibility: "off"
					}]
				}, {
					featureType: "All",
					elementType: "labels.text",
					stylers: [{
						saturation: -100
					}, {
						lightness: -100
					}, {
						gamma: 10
					}]
				}, {
					featureType: "poi",
					elementType: "All",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "All",
					elementType: "geometry",
					stylers: [{
						visibility: "simplified"
					}]
				}, {
					featureType: "All",
					elementType: "All",
					stylers: [{
						saturation: -82
					}, {
						lightness: -44
					}, {
						gamma: .9
					}]
				}, {
					featureType: "All",
					elementType: "labels.text.fill",
					stylers: [{
						lightness: 68
					}]
				}, {
					featureType: "poi",
					elementType: "All",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "transit.line",
					elementType: "All",
					stylers: [{
						visibility: "simplified"
					}, {
						lightness: -60
					}]
				}, {
					featureType: "landscape.natural",
					elementType: "All",
					stylers: [{
						visibility: "on"
					}]
				}, {
					featureType: "road.local",
					elementType: "All",
					stylers: [{
						lightness: -59
					}]
				}, {
					featureType: "road.arterial",
					elementType: "All",
					stylers: [{
						saturation: 7
					}, {
						hue: "#0066ff"
					}, {
						gamma: .9
					}]
				}, {
					featureType: "transit",
					elementType: "All",
					stylers: [{
						lightness: -38
					}, {
						gamma: 1.5
					}]
				}, {
					featureType: "water",
					elementType: "All",
					stylers: [{
						hue: "#0022ff"
					}, {
						gamma: 1.4
					}, {
						lightness: -32
					}, {
						saturation: -4
					}]
				}, {
					featureType: "administrative",
					elementType: "All",
					stylers: [{
						lightness: -64
					}]
				}, {
					featureType: "administrative.locality",
					elementType: "All",
					stylers: [{
						lightness: 70
					}]
				}, {
					featureType: "All",
					elementType: "All",
					stylers: [{
						saturation: 1
					}, {
						hue: "#0022ff"
					}]
				}, {
					featureType: "transit",
					elementType: "All"
				}, {
					featureType: "road.local",
					stylers: [{
						gamma: .9
					}]
				}, {
					elementType: "labels.text.fill",
					stylers: [{
						lightness: 16
					}, {
						gamma: 1
					}]
				}]
			},
			n = document.getElementById("map");
		if ($("#map").length) var r = new google.maps.Map(n, t);
		var p = {
				path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
				fillColor: l,
				fillOpacity: o,
				anchor: new google.maps.Point(0, 0),
				strokeWeight: 0,
				scale: i
			},
			c = new google.maps.Marker({
				position: a,
				map: r,
				icon: p,
				title: "Your Location!"
			});
		$('a[data-toggle="tab"]').on("shown.bs.tab", function() {
			e()
		}), c.addListener("click", function() {
			$(".tab-content .map-wrapper .button-description").addClass("active"), $(".tab-content .map-wrapper .container-info").addClass("active")
		})
	}
	$(".work-grid").cubeportfolio({
		filters: "#js-filters-masonry",
		layoutMode: "grid",
		defaultFilter: "*",
		animationType: "quicksand",
		gapHorizontal: 50,
		gapVertical: 50,
		auto: !0,
		sortToPreventGaps: !0,
		loadMore: "#work-loadmore",
		loadMoreAction: "click",
		gridAdjustment: "responsive",
		mediaQueries: [{
			width: 1500,
			cols: 3
		}, {
			width: 1100,
			cols: 3
		}, {
			width: 800,
			cols: 3
		}, {
			width: 480,
			cols: 2
		}, {
			width: 320,
			cols: 1
		}],
		caption: "revealTop",
		displayType: "default",
		displayTypeSpeed: 70,
		lightboxDelegate: ".cbp-lightbox",
		lightboxGallery: !1,
		lightboxTitleSrc: "data-title",
		singlePageDelegate: ".cbp-singlePage",
		singlePageDeeplinking: !1,
		singlePageAnimation: "fade",
		singlePageStickyNavigation: !1,
		singlePageCallback: function(e, t) {
			var a = this;
			$.ajax({
				url: e,
				type: "GET",
				dataType: "html",
				timeout: 1e4
			}).done(function(e) {
				a.updateSinglePage(e)
			}).fail(function() {
				a.updateSinglePage("AJAX Error! Please refresh the page!")
			})
		}
	}), $(".slider-process").cubeportfolio({
		layoutMode: "slider",
		drag: !0,
		auto: !1,
		showNavigation: !1,
		showPagination: !0,
		rewindNav: !1,
		scrollByPage: !1,
		singlePageDelegate: null,
		gridAdjustment: "responsive",
		mediaQueries: [{
			width: 1500,
			cols: 1
		}],
		gapHorizontal: 0,
		gapVertical: 700,
		caption: "opacity",
		displayType: "fadeIn",
		displayTypeSpeed: 100
	}), e(), $(".slider-team").cubeportfolio({
		layoutMode: "slider",
		drag: !0,
		auto: !1,
		autoTimeout: 5e3,
		autoPauseOnHover: !0,
		showNavigation: !1,
		showPagination: !0,
		rewindNav: !0,
		scrollByPage: !0,
		gridAdjustment: "responsive",
		mediaQueries: [{
			width: 800,
			cols: 3
		}, {
			width: 480,
			cols: 2
		}, {
			width: 320,
			cols: 1
		}],
		gapHorizontal: 0,
		gapVertical: 50,
		caption: "revealTop",
		displayType: "fadeIn",
		displayTypeSpeed: 400,
		singlePageInlineDelegate: ".cbp-singlePageInline",
		singlePageInlinePosition: "bottom",
		singlePageDelegate: null,
		singlePageInlineInFocus: !1,
		singlePageInlineCallback: function(e, t) {
			var a = this;
			$.ajax({
				url: e,
				type: "GET",
				dataType: "html",
				timeout: 1e4
			}).done(function(e) {
				a.updateSinglePageInline(e)
			}).fail(function() {
				a.updateSinglePageInline("AJAX Error! Please refresh the page!")
			})
		}
	}), $(".news-slider").cubeportfolio({
		layoutMode: "slider",
		drag: !0,
		auto: !1,
		showNavigation: !1,
		showPagination: !0,
		rewindNav: !0,
		scrollByPage: !0,
		gridAdjustment: "responsive",
		mediaQueries: [{
			width: 800,
			cols: 2
		}, {
			width: 480,
			cols: 1
		}, {
			width: 320,
			cols: 1
		}],
		gapHorizontal: 0,
		gapVertical: 50,
		caption: "",
		displayType: "fadeIn",
		displayTypeSpeed: 400,
		singlePageDelegate: null
	}), $("#contact-form").submit(function(e) {
		e.preventDefault();
		var t = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "assets/contact.php",
			data: t,
			dataType: "json",
			success: function(e) {
				$("#contact-form .form-group").removeClass("error"), setTimeout(function() {
					"" !== e.nameMessage && $("#contact-form-name").parent().addClass("error"), "" !== e.emailMessage && $("#contact-form-email").parent().addClass("error"), "" !== e.subjectMessage && $("#contact-form-subject").parent().addClass("error"), "" !== e.messageMessage && $("#contact-form-message").parent().addClass("error")
				}, 50), "" === e.nameMessage && "" === e.emailMessage && "" === e.subjectMessage && "" === e.messageMessage && ($("#contact-form").addClass("success"), $("#contact-form button span").removeClass("ti-arrow-right").addClass("ti-check"), $("#contact-form input").attr("placeholder", ""), $("#contact-form-message").attr("placeholder", e.succesMessage), $("#contact-form input,#contact-form button").val("").prop("disabled", !0))
			}
		})
	}), $("#contact form button").hover(function() {
		$("#contact form .form-group.button-container").addClass("move")
	}, function() {
		$("#contact form  .form-group.button-container").removeClass("move")
	}), $("#contact form input").focusin(function() {
		$(this).parent(".form-group").addClass("switch-color")
	}), $("#contact form input").focusout(function() {
		$(this).parent(".form-group").removeClass("switch-color")
	}), $(window).on("resize", function() {
		$("#contact .map-wrapper").css("height", .8 * $("#contact .map-wrapper").width())
	}), $('a[data-toggle="tab"]').on("shown.bs.tab", function() {
		$("#contact .map-wrapper").css("height", .8 * $("#contact .map-wrapper").width())
	});
	var a = new google.maps.LatLng(40.761418, -73.977622),
		s = 14,
		l = $(".block-contact-1 .tab-content .map-wrapper .button-description .content-visible").css("background-color"),
		i = 12,
		o = 1;
	google.maps.event.addDomListener(window, "load", t), $("body").on("click", ".tab-content .map-wrapper .button-description", function() {
		$(".tab-content .map-wrapper .button-description").hasClass("active") ? ($(".tab-content .map-wrapper .container-info").removeClass("active"), $(".tab-content .map-wrapper .button-description").removeClass("active")) : ($(".tab-content .map-wrapper .button-description").addClass("active"), $(".tab-content .map-wrapper .container-info").addClass("active"))
	}), $("body").on("mousedown", "#map", function() {
		$(".tab-content .map-wrapper .button-description").hasClass("active") && setTimeout(function() {
			$(".tab-content .map-wrapper .container-info").removeClass("active"), $(".tab-content .map-wrapper .button-description").removeClass("active")
		}, 100)
	})
});
jQuery(window).load(function() {
	"use strict";
	$("#hero").hasClass("half-height") ? setTimeout(function() {
		$(".options-panel .panel-button").css("margin-right", "-50px")
	}, 1300) : setTimeout(function() {
		$(".options-panel .panel-button").css("margin-right", "-50px")
	}, 2600)
}), $(document).ready(function() {
	"use strict";
	$(".options-panel .panel-button").click(function() {
		$(".options-panel").toggleClass("active")
	}), $("section, footer").click(function() {
		$(".options-panel").removeClass("active")
	}), $(".skin-switch").click(function() {
		var n = $(this).attr("name");
		return $("#skin").attr("href", "assets/css/color/" + n), !1
	}), $(".options-panel .navigation-sticky-button").click(function() {
		$(".options-panel .nvb").removeClass("active"), $(this).addClass("active"), $("html, body").animate({
			scrollTop: "0"
		}), $(".navigation-main").removeClass("popup-navigation"), $(".navigation-main").addClass("sticky-navigation"), $(".navigation-main.sticky-navigation").sticky({
			topSpacing: 0
		})
	}), $(".options-panel .navigation-popup-button").click(function() {
		$(".options-panel .nvb").removeClass("active"), $(this).addClass("active"), $("html, body").animate({
			scrollTop: "1"
		}), $(".navigation-main.sticky-navigation").unstick(), $("#sticky-wrapper > .sticky-navigation").unwrap(), $(".navigation-main").removeClass("sticky-navigation"), $(".navigation-main").addClass("popup-navigation"), $(document).scroll(function() {
			$(this).scrollTop() > $(window).height() ? $(".navigation-main.popup-navigation").addClass("show") : $(".navigation-main.popup-navigation").removeClass("show")
		})
	}), $(".options-panel .navigation-fixed-button").click(function() {
		$(".options-panel .nvb").removeClass("active"), $(this).addClass("active"), $("html, body").animate({
			scrollTop: "0"
		}), $(".navigation-main.sticky-navigation").unstick(), $("#sticky-wrapper > .sticky-navigation").unwrap(), $(".navigation-main").removeClass("popup-navigation"), $(".navigation-main").removeClass("sticky-navigation")
	}), $(".options-panel .gravity-remove-button").click(function() {
		$("#canvas canvas").length && ($("html, body").animate({
			scrollTop: "0"
		}), $("#canvas canvas").remove(), $(".options-panel .gravity-remove-button,.options-panel .pei").remove())
	}), ("waves" === option_hero_background_mode || "sphere" === option_hero_background_mode || "mesh" === option_hero_background_mode || "space" === option_hero_background_mode || $("#hero").hasClass("slider-revolution") || $("#hero").hasClass("slider-revolution") || $("#hero").hasClass("half-height")) && $(".options-panel .gravity-remove-button,.options-panel .pei").remove(), ($("#hero").hasClass("error-404") || $("#hero").hasClass("sl") || $("#hero").hasClass("half-height")) && $(".options-panel h4:contains('Navigation Mode'),.options-panel .nvb").remove()
});