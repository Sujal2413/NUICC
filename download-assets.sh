#!/usr/bin/env bash
# ----------------------------------------------------------------------------
# Download all real NUICC image assets from the current live site into the repo.
# Preserves the original folder structure under: public/assets/img/...
# Re-run safe: skips files that 404 and overwrites existing ones.
#
# Usage:
#   chmod +x download-assets.sh
#   ./download-assets.sh
# ----------------------------------------------------------------------------
set -u

BASE="https://nuicc.org/public/assets/img"
OUT="public/assets/img"

paths=(
  # --- home / brand / icons ---
  "home/NUICC_Logo.png"
  "home/nuicc_image.jpg"
  "home/nicuu-page.png"
  "home/nuicc-img.png"
  "home/World-Map.jpg"
  "home/bg-national-us.png"
  "home/empowering-global.png"
  "home/contact-background.jpg"
  "home/open-link.png"
  "home/countries.png"
  "home/trade-volume.png"
  "home/job-created.png"
  "home/business-partnership.png"
  "home/buisness_matchmaking.png"
  "home/trade_missions.png"
  "home/policy_advocasy.png"
  "home/market-intellenge.png"
  "home/value-networking.png"
  "home/stratergy.png"
  "home/the-right.png"
  "home/ribbon.png"
  "home/rakhi-project/DrV_Rakhi_1.png"
  "home/rakhi-project/DrV_Rakhi_2.png"
  "home/rakhi-project/DrV_Rakhi_3.png"

  # --- VIP / dignitary photos ---
  "vip/DrV_Birla.jpg"
  "vip/DrV_Chandrashekar.jpg"
  "vip/DrV_HonRSingh.jpg"
  "vip/rajasthan_cm.jpg"
  "vip/vip1.jpeg"
  "vip/vip2.png"
  "vip/DrV_Africa.jpeg"
  "vip/DrV_Amb_Kwatra.jpeg"
  "vip/DrV_Amb_Supriya.png"
  "vip/DrV_ArvindKrishna.jpg"
  "vip/DrV_Biden.jpeg"
  "vip/DrV_Dixit.jpeg"

  # --- gallery ---
  "gallery/sulekha_nk_q25.jpg"
  "gallery/11back.png"
  "gallery/back_004.png"
  "gallery/AUS_Cham.png"
  "gallery/DrV_Amb_Kwatra.png"
  "gallery/DrV_Biden.png"
  "gallery/us-india.png"
  "gallery/DrV_Chandrashekar.png"
  "gallery/DrV_Dixit.png"
  "gallery/DrV_HonRSingh.png"
  "gallery/DrV_Kamal.png"
  "gallery/DrV_withgroup.png"
  "gallery/DrV_Modi.png"
  "gallery/DrVoria_NUICC_Soft_Launch.png"
  "gallery/NUICC_Launch4.png"
  "gallery/gal1.png"
  "gallery/gal2.png"
  "gallery/gal3.png"
  "gallery/gal4.png"
  "gallery/gal6.png"
  "gallery/gal7.png"
  "gallery/gal8.jpg"
  "gallery/gal9.png"

  # --- partner / affiliation logos ---
  "logo/logo1.png"
  "logo/logo2.png"
  "logo/logo3.png"
  "logo/logo4.png"
  "logo/logo5.png"
  "logo/logo6.jpg"
  "logo/iidt.jpeg"
  "logo/phdcci.jpeg"
  "logo/assocham.png"
  "logo/IBM.jpg"
  "logo/tata.png"

  # --- event / feature-launch images ---
  "event/Feature_launches_1.png"
  "event/fetures_launches_2.png"
  "event/modi.png"
  "event/image_event.png"
  "event/event_1lastimage.png"
  "event/first_image_first_launch.png"
  "event/first_image_2.jpeg"
  "event/first_image_3.png"
  "event/first_image_4.jpeg"
  "event/first_image_5.jpeg"
  "event/image_india.png"
  "event/event_2section.png"
  "event/image_3section_2.png"
  "event/image_3section_1.png"
  "event/image_1_card_2.png"
  "event/image_2_card_2.png"
  "event/image_3_card_2.png"
  "event/pravashi_family.png"
  "event/rajsthan_image.png"
  "event/again_handhskae_rajsthan.png"
  "event/rajsthan_handshake.png"
  "event/news_paper_rajsthan.png"
  "favicon.png"
)

# Optional: supporting PDFs (letters of support, bios)
pdfs=(
  "home/Purnima_Profile__2006__1_.docpdf.pdf"
  "home/Colorado_Gov_1_._Bill_Owens___Purnima_Voria.pdf"
  "home/NUICC___Prime_Minister_of_India_Letter_of_Support.pdf"
  "home/NUICC___Commerce_Minister_of_India_Letter_of_Support.pdf"
  "home/NUICC_Co_Chair_Congressman_Mark_Udall.pdf"
  "home/NUICC_Co_Chair_Letter_of_Recommendation_to_President_George_W_1_._Bush.pdf"
  "home/Congressman_Bob_Beauprez_Supports_NUICC_in_Indo_US_Nuclear_Deal.pdf"
  "home/voria-bio.pdf"
)

ok=0; fail=0
get() {
  local rel="$1"
  if curl -fsSL --create-dirs -o "$OUT/$rel" "$BASE/$rel"; then
    echo "  ✓ $rel"; ok=$((ok+1))
  else
    echo "  ✗ $rel (skipped — not found / blocked)"; fail=$((fail+1))
  fi
}

echo "Downloading images → $OUT"
for p in "${paths[@]}"; do get "$p"; done
echo "Downloading PDFs → $OUT"
for p in "${pdfs[@]}"; do get "$p"; done

# Supporting assets referenced by the restored live-page markup.
root_assets=(
  "assets/video/event.webm"
  "assets/css/animate.css"
  "assets/css/bootstrap.min.css"
  "assets/css/main.css"
  "assets/css/nivo-lightbox.css"
  "assets/css/responsive.css"
  "assets/fonts/line-icons.css"
  "assets/fonts/LineIcons.eot"
  "assets/fonts/LineIcons.ttf"
  "assets/fonts/LineIcons.woff"
  "assets/fonts/LineIcons.svg"
  "assets/js/bootstrap.min.js"
  "assets/js/homepage.js"
  "assets/js/jquery-min.js"
  "assets/js/jquery.countdown.min.js"
  "assets/js/jquery.counterup.min.js"
  "assets/js/jquery.easing.min.js"
  "assets/js/jquery.nav.js"
  "assets/js/main.js"
  "assets/js/nivo-lightbox.js"
  "assets/js/popper.min.js"
  "assets/js/sweetalert.js"
  "assets/js/video.js"
  "assets/js/waypoints.min.js"
  "assets/js/wow.js"
)

echo "Downloading supporting assets → public/assets"
for rel in "${root_assets[@]}"; do
  src="https://nuicc.org/public/$rel"
  dest="public/$rel"
  if curl -fsSL --create-dirs -o "$dest" "$src"; then
    echo "  ✓ $rel"; ok=$((ok+1))
  else
    echo "  ✗ $rel (skipped — not found / blocked)"; fail=$((fail+1))
  fi
done

echo ""
echo "Done. Downloaded: $ok   Skipped: $fail"
echo "Reference assets in code with local paths, e.g.  src=\"/assets/img/vip/DrV_Biden.jpeg\""
