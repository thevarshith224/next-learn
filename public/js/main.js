<p>Signature, dates, or special messages</p>
        </div>
        <div class="feature-card">
          <h3>Limited Edition</h3>
          <p>Only 1000 items per product line</p>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="main-footer">
    <p>&copy; 2025 1K Products. All rights reserved.</p>
  </footer>

  <!-- JavaScript -->
  <script>
    // Countdown Timer
    function updateCountdown() {
      const countDownDate = new Date("May 1, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days.toString().padStart(2, "0");
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

      if (distance < 0) {
        clearInterval(countdownTimer);
        document.querySelector(".countdown-container").innerHTML = `
          <h2 class="drop-live">Drop Live! Reserve Now</h2>
          <p class="limited-stock">Last few pairs remaining!</p>
        `;
      }
    }
