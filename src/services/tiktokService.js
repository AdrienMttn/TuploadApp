export class TikTokService {
  static async getContent(url) {
    try {
      const plateform = {
        "tiktok.com": "tiktok",
        "instagram.com": "instagram",
        "youtube.com": "youtube",
      };
      const domaine = url.replace(
        /^(?:https?:\/\/)?(?:[^\/]+\.)?([^.\/]+\.[^.\/]+).*$/,
        "$1"
      );
      if (plateform[domaine] == undefined) {
        return { error: "url invalide" };
      }
      const data = {
        url: url,
        platform: plateform[domaine],
      };
      const res = await fetch("YOUR_DOMAINE/webhook/searchVideo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const video = await res.json();
      if (video[0].status === "success") {
        return {
          url: video[0].medias[0].url,
          description: video[0].title,
        };
      } else {
        return { error: "video introuvable" };
      }
    } catch (error) {
      return { error: "video introuvable" };
    }
  }

  static async uploadVideo(videoData) {
    const res = await fetch("YOUR_DOMAINE/webhook/tiktok-upload", {
      method: "POST",
      body: JSON.stringify(videoData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status != 200) {
      return { error: "une erreur est survenue" };
    } else {
      return await res.json();
    }
  }
}
